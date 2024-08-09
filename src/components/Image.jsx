export const ImageBlock = {
    label: 'Image',
    content: `
        <div class="image-block" style="text-align: center;">
            <img src="https://via.placeholder.com/150" alt="Placeholder Image" style="max-width: 100%; height: auto;" />
            <p style="margin-top: 5px;">Image description</p>
        </div>
    `,
    category: 'Media',
};

export const ImageWidget = {
    label: 'Image',
    id: "image",
    select: true,
    content: { type: "image" },
    activate: true,
}
