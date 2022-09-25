
var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);

    mobilenet.load().then(model => {
        // Classify the image.
        model.classify(image).then(predictions => {
            console.log(predictions);

          var element = document.getElementById("myPara");
            element.innerHTML = "This is a " + predictions[0].className + "cat";

          var popup = document.getElementById("myPopup");
          popup.classList.toggle("show");

        });
      });
};


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  

function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

