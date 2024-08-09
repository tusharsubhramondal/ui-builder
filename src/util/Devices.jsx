// deviceConfig.js

const devicesConfig = [
    {
        name: 'Desktop',
        width: '', // default size
    },
    {
        name: 'Tablet',
        width: '768px', // this value will be used on canvas width
        widthMedia: '810px', // this value will be used in CSS @media
    },
    {
        name: 'Mobile',
        width: '320px', // this value will be used on canvas width
        widthMedia: '480px', // this value will be used in CSS @media
    }
];

export default devicesConfig;
