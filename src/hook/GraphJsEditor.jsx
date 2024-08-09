import React, { useEffect, useRef, useState } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import '../assets/css/styles.css'; // Make sure to include your custom styles
import devicesConfig from '../util/Devices';
import Toolbar from '../components/Toolbar';
import { BoxBlock } from '../components/Box';
import { BasicForm } from '../components/Form';
import { FooterWidget } from '../components/template/Footer';
import { OneColumnBlock, ThreeColumnBlock, TwoColumnBlock, TwoColumnByThreeSevenBlock } from '../components/blocks';

const GraphJsEditor = () => {

  const [editor, setEditor] = useState(null);
  const [activePanel, setActivePanel] = useState(null);
  const [activeDevice, setActiveDevice] = useState('Desktop');

  const [showLayers, setShowLayers] = useState(false);

  const [stylesVisible, setStylesVisible] = useState(false);

  const [visible, setVisible] = useState(true);

  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const editor = grapesjs.init({
        container: '#gjs',
        fromElement: true,
        height: '93vh',
        width: 'auto',
        storageManager: false,
        blockManager: {
          appendTo: '#blocks',          
        },
        styleManager: {
          appendTo: '.styles-container',
        },
        layerManager: {
          appendTo: '.layers-container',
        },
        panels: {
          defaults: [
            {
              id: 'layers',
              el: '.panel__right',
              resizable: {
                maxDim: 350,
                minDim: 200,
                tc: 0,
                cl: 1,
                cr: 0,
                bc: 0,
                keyWidth: 'flex-basis',
              },
            },
          ],
        },
        selectorManager: {
          appendTo: '.styles-container',
        },
        deviceManager: {
          devices: [
            devicesConfig
          ]
        },
      });

      editor.Panels.addPanel({
        id: 'panel-top',
        el: '.panel__top',
      });

      setEditor(editor);

      editor.BlockManager.blocks.add(OneColumnBlock);
      editor.BlockManager.blocks.add(TwoColumnBlock);
      editor.BlockManager.blocks.add(ThreeColumnBlock);
      editor.BlockManager.blocks.add(TwoColumnByThreeSevenBlock);
       // Check if FooterWidget was added successfully
      console.log('Blocks in BlockManager:', editor.BlockManager.getAll());

      editor.setDevice(activeDevice);
      console.log(activeDevice, 'activeDevice');

      visible && editor.runCommand('sw-visibility');
      console.log(visible, 'visible');

      // Define 'show-layers' command
      editor.Commands.add('show-layers', {
        run(editor, sender) {
          const lmEl = document.querySelector('.layers-container');
          lmEl.style.display = 'block'; // Show layers container
        },
        stop(editor, sender) {
          const lmEl = document.querySelector('.layers-container');
          lmEl.style.display = 'none'; // Hide layers container
        },
      });

      // Define 'show-styles' command
      editor.Commands.add('show-styles', {
        run(editor, sender) {
          const smEl = document.querySelector('.styles-container');
          smEl.style.display = 'block'; // Show styles container
        },
        stop(editor, sender) {
          const smEl = document.querySelector('.styles-container');
          smEl.style.display = 'none'; // Hide styles container
        },
      });

      // Initialize the display state of the panels to hidden
      document.querySelector('.layers-container').style.display = 'none';
      document.querySelector('.styles-container').style.display = 'none';

      console.log(editor.Commands.getAll());

      
    }
  }, []);

  /**
   * Toggles the visibility of the sw-visibility command on the editor.
   * If the editor is defined, it runs or stops the command based on the
   * current state of the visibility.
   *
   * @return {void} This function does not return anything.
   */
  const setSwVisibility = () => {
    // Check if the editor is defined
    if (editor) {
      // Toggle the visibility state
      setVisible(prevState => {
        const newState = !prevState;

        // Run the sw-visibility command if newState is true,
        // otherwise stop the command
        if (newState) {
          editor.runCommand('sw-visibility');
        } else {
          editor.stopCommand('sw-visibility');
        }

        return newState;
      });
    }
  };

  /**
   * Executes the 'export-template' command on the editor, if it exists.
   * This command exports the current template as a JSON object.
   *
   * @return {void} This function does not return anything.
   */
  const exportTemplate = () => {
    // Check if the editor is defined
    if (editor) {
      // Run the 'export-template' command on the editor
      editor.runCommand('export-template');
    }
  };

  /**
   * Toggles the visibility of the layers panel in the GraphJS editor.
   * If the editor is defined, it runs or stops the 'show-layers' command
   * based on the current state of the visibility. It also stops the 'show-styles'
   * command and sets the active panel to 'layers' if the new state is true.
   *
   * @return {void} This function does not return anything.
   */
  const toggleLayers = () => {
    if (editor) {
      // Toggle the visibility state
      setShowLayers(prevState => {
        const newState = !prevState;

        // Run the 'show-layers' command if newState is true,
        // otherwise stop the command
        if (newState) {
          editor.runCommand('show-layers');
          editor.stopCommand('show-styles');
          setStylesVisible(false);
          setActivePanel('layers');
        } else {
          editor.stopCommand('show-layers');
          setActivePanel(null);
        }

        return newState;
      });
    }
  };

  /**
   * Toggles the visibility of the styles panel in the GraphJS editor.
   *
   * @return {void} This function does not return anything.
   */
  const toggleStyles = () => {
    if (editor) {
      // Use functional update to ensure we're working with the latest state
      setStylesVisible(prevState => {
        // Calculate the new state based on the previous state
        const newState = !prevState;

        if (newState) {
          // If the styles panel is being shown...

          // Run the 'show-styles' command to show the styles panel
          editor.runCommand('show-styles');

          // Stop the 'show-layers' command to hide the layers panel
          editor.stopCommand('show-layers');

          // Update the showLayers state to false
          setShowLayers(false);

          // Set the active panel to 'styles'
          setActivePanel('styles');
        } else {
          // If the styles panel is being hidden...

          // Stop the 'show-styles' command to hide the styles panel
          editor.stopCommand('show-styles');

          // Set the active panel to null
          setActivePanel(null);
        }

        // Return the new state
        return newState;
      });
    }
  };

  /**
   * Sets the active device in the GraphJS editor based on the given device type.
   *
   * @param {string} deviceType - The type of device to set as active. Can be 'Mobile', 'Tablet', or 'Desktop'.
   * @return {void} This function does not return anything.
   */
  const setDevice = (deviceType) => {
    // Check if the editor is defined
    if (editor) {
      // Get the corresponding device name for the given device type from the deviceMap
      const activeDevice = deviceType;
      // Set the active device state to the corresponding device name
      setActiveDevice(activeDevice);

      // Set the active device in the GraphJS editor
      editor.setDevice(deviceType);
    }
  };

  /**
   * Sets the full screen mode in the GraphJS editor.
   *
   * @return {void} This function does not return anything.
   */
  const setFullScreen = () => {
    // Check if the editor is defined
    if (editor) {
      // Run the 'fullscreen' command on the editor to set full screen mode
      editor.runCommand('fullscreen');
    }
  };

  /**
   * Clears the canvas of the GraphJS editor if user confirms the action.
   *
   * @return {void} This function does not return anything.
   */
  const clearCanvas = () => {
    // Check if the editor is defined and if the user confirms the action
    if (editor && window.confirm('Are you sure you want to clear the canvas?')) {
      // Run the 'core:canvas-clear' command on the editor to clear the canvas
      editor.runCommand('core:canvas-clear');
    }
  };

  const togglePreview = () => {
    if (editor) {
      setVisible(false);
      editor.stopCommand('sw-visibility');
      editor.runCommand('preview');
    }
  };

  return (
    <>
      {/* <Toolbar/> */}

      <div className='row toolbar mx-0'>
        <div className="col d-flex">
          <span className='faIcon' onClick={setSwVisibility}><i className={`fa fa-square-o ${ visible ? 'active' : ''}`} aria-hidden="true"></i></span>
          <span className='faIcon' onClick={() => exportTemplate()}><i className="fa fa-code" aria-hidden="true"></i></span>
        </div>
        
        <div className="col d-flex justify-content-center">
          <span className={`faIcon ${activeDevice === 'Desktop' ? 'active' : ''}`} onClick={() => setDevice('Desktop')}><i className="fa fa-desktop" aria-hidden="true"></i></span>
          <span className={`faIcon ${activeDevice === 'Tablet' ? 'active' : ''}`} onClick={() => setDevice('Tablet')}><i className="fa fa-tablet" aria-hidden="true"></i></span>
          <span className={`faIcon ${activeDevice === 'Mobile' ? 'active' : ''}`} onClick={() => setDevice('Mobile')}><i className="fa fa-mobile" aria-hidden="true"></i></span>
        </div>
        <div className="col d-flex justify-content-end">
          <span className={`faIcon panelSvg ${activePanel === 'layers' ? 'active' : ''}`} onClick={toggleLayers}>
            <svg style={{ maxWidth: "24px", height: "auto" }} viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z"></path>
            </svg>
          </span>
          <span className={`faIcon panelSvg ${activePanel === 'styles' ? 'active' : ''}`} onClick={toggleStyles}>
            <svg style={{ maxWidth: "24px", height: "auto" }} viewBox="0 0 24 24">
              <path fill="currentColor" d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z"></path>
            </svg>
          </span>
          <span className='faIcon panelSvg' onClick={() => setFullScreen()}>
            <svg style={{ maxWidth: "24px", height: "auto" }} viewBox="0 0 24 24">
              <path fill="currentColor" d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z"></path>
            </svg>
          </span>
          <span className='faIcon panelSvg' onClick={() => clearCanvas()}>
            <svg style={{ maxWidth: "24px", height: "auto" }} viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"></path>
            </svg>
          </span>
          <span className='faIcon panelSvg' onClick={() => togglePreview()}>
            <svg style={{ maxWidth: "24px", height: "auto" }} viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>
          </span>
        </div>
      </div>

      <div className="panel__top">
        <div className="panel__basic-actions"></div>
        <div className="panel__devices"></div>
        <div className="panel__switcher"></div>
      </div>

      <div className="editor-row">
        <div id="blocks"></div>
        <div className="editor-canvas">
          <div id="gjs" ref={editorRef}></div>
        </div>
        <div className="panel__right">
          <div className="layers-container"></div>
          <div className="styles-container"></div>
        </div>
      </div>
    </>
  );
};

export default GraphJsEditor;
