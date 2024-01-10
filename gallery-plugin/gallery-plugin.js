$.fn.galleryPlugin = function () {
  var currentImgIndex;
  var gridContainer = this;

  gridContainer.addClass("gallery-container");

  gridContainer.children().addClass("gallery-item");

  var fullDiv = $("<div>").attr("id", "full-div");
  fullDiv.hide();
  $("body").append(fullDiv);

  var viewImg = $("<img>");
  var leftBtn = $('<i class="fas fa-chevron-left"></i>').addClass("left-btn");
  var rightBtn = $('<i class="fas fa-chevron-right"></i>').addClass(
    "right-btn"
  );

  fullDiv.append(leftBtn, viewImg, rightBtn);

  gridContainer.children().on("click", function () {
    currentImgIndex = $(this).index();
    fullDiv.show();
    viewImg.attr("src", $(this).attr("src"));
  });

  leftBtn.on("click", function () {
    currentImgIndex--;
    if (currentImgIndex < 0)
      currentImgIndex = gridContainer.children().length - 1;
    updateImg(currentImgIndex);
  });

  rightBtn.on("click", function () {
    currentImgIndex = (currentImgIndex + 1) % gridContainer.children().length;
    updateImg(currentImgIndex);
  });

  fullDiv.on("click", function (e) {
    if (e.target.tagName.toLowerCase() == "div") {
      fullDiv.hide();
    }
  });

  function updateImg(index) {
    viewImg.animate({ opacity: 0 }, 150, function () {
      viewImg.attr("src", gridContainer.children().eq(index).attr("src"));
      viewImg.animate({ opacity: 1 }, 150);
    });
  }
};
