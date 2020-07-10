const gifForm = $("#gif-form");

gifForm.submit(e => {
    e.preventDefault();
    const searchTerm = $(".search").val();
    const url = `https://api.giphy.com/v1/gifs/search?&q=${searchTerm}&limit=25&api_key=a4ydDc4WpesyfvXPTkEoSgyOWStNjTlm`;
    $.get(url)
      .done(resp => {
        showGiphs(resp.data.slice(0, 40));
      })
      .fail(console.log);
  });

  function showGiphs(dataArray) {
    const results = document.querySelector(".results");
    let output = "";
    output = dataArray
      .map(
        imgData =>
          `<a href="${imgData.images.original.url}" alt="${
            imgData.title
          }" target="_blank"><img src="${imgData.images.original.url}"></a>`
      )
      .join("");
    $(".results").html(output);

    fetch(path)
    .then(function(res) {
    return res.json()
})

.then(function(json) {
    let resultsHTML = ''
        json.data.forEach(function(obj) {
            const url = obj.images.fixed_width.url
            const width = obj.images.fixed_width.width
            const height = obj.images.fixed_width.height
            const alt = obj.title;
            resultsHTML += `
            <div class="box">
                <div class="content">
                    <figure>
                        <img src="${url}" width="${width}" height="${height}" alt="${alt}">
                        <figcaption>${alt}</figcaption>
                    </figure>
                </div>
            </div>
            `
        })

        resultsEl.innerHTML = resultsHTML
    })
  }