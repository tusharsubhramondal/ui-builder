export const ModalWidget = {
    label: 'Modal',
    content: `
        <!-- Button to open the modal -->
        <button id="open-modal-btn">Open Modal</button>

        <!-- The Modal -->
        <div id="myModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <span id="close-modal-btn" class="close">&times;</span>
                <h2>Modal Title</h2>
                <p>This is a simple modal window.</p>
                <button id="modal-action-btn">Take Action</button>
            </div>
        </div>

        <script>
            // Get the modal
            var modal = document.getElementById("myModal");

            // Get the button that opens the modal
            var btn = document.getElementById("open-modal-btn");

            // Get the <span> element that closes the modal
            var span = document.getElementById("close-modal-btn");

            // Get the action button inside the modal
            var actionBtn = document.getElementById("modal-action-btn");

            // When the user clicks the button, open the modal 
            btn.onclick = function() {
                modal.style.display = "block";
            }

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

            // Example action button functionality
            actionBtn.onclick = function() {
                alert('Action button clicked!');
            }
        </script>
    `,
    category: 'Widgets',
};
