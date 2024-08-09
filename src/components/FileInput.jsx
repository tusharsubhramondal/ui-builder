export const FileInputWidget = {
    label: 'File Input',
    content: `
        <div class="file-input-widget">
            <label for="file-upload">Upload a file:</label>
            <input type="file" id="file-upload" name="file-upload" accept=".jpg, .jpeg, .png, .pdf"/>
            <p class="description">Select a file to upload (e.g., .jpg, .png, .pdf).</p>
        </div>
    `,
    category: 'Inputs',
};
