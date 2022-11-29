document.addEventListener('DOMContentLoaded', function () {
  // particleground(document.getElementById('particles'), {
  //   dotColor: '#5cbdaa',
  //   lineColor: '#5cbdaa'
  // });

  document.querySelectorAll(".portfolio-filter>button").forEach(
    (elem) => {
      elem.addEventListener("click", () => {
        // Remove the active class from other filters
        const activeClassName = "active-filter";
        document.querySelector(`.${activeClassName}`).classList.remove(activeClassName);
        elem.classList.add(activeClassName);
        const tagText = elem.textContent.trim().toLowerCase();
        if (tagText == "see all") {
          showAllProjects();
        } else {
          filterProjectsByTag(tagText);
        }
      })
    }
  )
}, false);


function showAllProjects() {
  document.querySelectorAll(".projects>div").forEach(
    (elem) => {
      elem.style = "display: block";
    }
  );
}


function filterProjectsByTag(filteredTag) {
  document.querySelectorAll(".projects>div").forEach(
    (elem) => {
      let containsFilter = false;
      elem.querySelectorAll(".p-tags > div").forEach(
        (tag) => {
          const tagText = tag.textContent.trim().toLowerCase();
          if (tagText == filteredTag) {
            containsFilter = true;
          }
        }
      )
      if (containsFilter) {
        elem.style = "display: block";
      } else {
        elem.style = "display: none";
      }
    }
  )
}