export const SliderWidget = {
    label: 'Slider',
    content: `
        <div class="slider-widget">
            <label for="range-slider">Adjust the value:</label>
            <input type="range" id="range-slider" name="range-slider" min="0" max="100" value="50" step="1" />
            <p class="slider-value">Value: <span id="slider-value">50</span></p>
        </div>
        <script>
            // JavaScript to update the displayed value when the slider is changed
            document.getElementById('range-slider').addEventListener('input', function() {
                document.getElementById('slider-value').textContent = this.value;
            });
        </script>
    `,
    category: 'Widgets',
};
