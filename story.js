const flag = {
  Chinese:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_PXxvnrngtM2S6He9EkSeHPDETSNGp3IDdCpVOIVH_J4tjJEFhqjZQoPjFNm8nE7O4oc-OTtlpkupleAMkWzb8vdX3rDXhHBHFtHox-8s7A59CUmgQTzlX3V4x4qDxvGCuucnuRTKkQ6mGdUrBLLjZN7uJZK0sujRvGOG_TLsPWkRD813niXMalBaX2TH/s1600/Chinese.png",
  English:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhxNnPlvmkZKMc-wLDXkqNKEsYRQOKUJa5aOr7tLLw7RXkLlATUM4wHqQ25Beb4zcP8jwDSPgBTdIqfRQdSrUpvDaL9SoaEPlEv10jRRHDyKoia-PxxF-MHIJhcYMHCwtDtpLYsfWClFKTwH45bJGMrplMXeSeFhB8lubEalux1BHAJgqT9N3vvzwq3nMpY/s1600/English.png",
  Indonesian:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYKZVju2iNVxGrLTj8C66KJTuK4HYoOKtuuYUy79Q4K3Ywcit1FEifrzcycqPXfJyyRHSzUmHKLCwBiKON5Mbt-Cy75nPqTM41oTqy_hH_i60sAyk-nXHHnIkyt69VR0zxo7eBYvnxFUWVKrRmt9fgfBvmTTJl8W2VQvSNpSK-Ons07EjcNjvBVX-fKmiP/s1600/Indonesian.png",
  Japanese:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhobsMD-af6i2g_ftTD6AWD3jazQFbyKu6vjeKjPtMv3mDPOCMc6o75vONG7nvApM1Run1MmqyV3xiqvaVcrD_POxhRgJJZrEYl6yJV5lUuA53IPSPsfcMEP60hCgCseNRMSjL0KpfRKt9LTZUJQZqMTa2foJi8HDi17sSTghyphenhyphengmxq2CXHq8VMM9vcOErM6/s1600/Japanese.png",
  Korean:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZhljXdE6tPMHW4VuHN9U6HNbF_V8mNHTLftWNWjjqzEE_ZTiG4ICn7bMqncE_7nSvVNFTAvImCdVjXiVz_v51gEh7Rrj2YEmDQVENkmnZB7ufbL0mZ0fYIm7UGwNsr7_m70Dl3EbLJkUFkpaZB-S2mVcCrBlaO9BzcHR5q2ZXkEw4bttepwVm7YxNzmQ1/s1600/Korean.png",
  Portuguese:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7rhRaKFhtXPtqaiyuKBv0QopyKWVIzKG6R7HAmQJzsR4UPRUjnJr859TwihuSB3qre0GJ1k0UwpgGBj6wjYmViTxZHq_XIVe7B6tUUbeIRUjRThjWBrKagg-CZXSScs7c0PNvZwoF4tKE4z7XWmoMs7wCfH74rBpI7zetWHcnJZsRdSaHEx0U4-w190Al/s1600/Portuguese.png",
  Russian:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_hz53unE-Lfzns9k5lScn7zC32ZMty8w11I9VWPpy7XY5AU41dkbg6sBaP4MoJQ7Z3aTAiDCK9k_mluv0b1q3NERJDTTlgblbea4TU7D5yB4FaqLD9qBthveeu_YRw5yDsb-ieB766TPIdYbGLZR7lFlZxcTRchYXUBn6I6gdwI-l5DCPm41PWGLcpocy/s1600/Russian.png",
  Spanish:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhy2OlK5hA1106NUpRtOxJ-wLYf0EVu5ddFNDSAJ14vLPSLpAUFRLTvm-hc6JvWeeR_Z_WqeLZIuPBoVkqM7-01wxkKBporoRJZWqY4uwfrzSTcdxLc2aZX9Z1fp41WZ4fUevVZLWS_8znz80XvaX6747XQ4UXwUMINAHWbgl4vLVxBBAKp-JZYlNVr2EE6/s1600/Spanish.png",
};

const artStories = document.querySelectorAll(`article#story`);

if (artStories.length >= 1) {
  for (let iA = 0; iA < artStories.length; iA++) {
    const artStory = artStories[iA];
    let eBooksCount = 0;

    // NOT AVAILAVLE
    function notAvailable(artStory_elData, readsItem) {
      const p = document.createElement("p");
      const i = document.createElement("i");

      i.textContent = "Currently not available.";

      i.setAttribute("class", "passive");
      p.setAttribute("class", "block small");

      p.appendChild(i);

      if (readsItem !== 1) {
        artStory_elData.parentNode.appendChild(p);
        artStory_elData.remove();
      } else {
        artStory_elData.appendChild(p);
      }
    }

    /* 

    CREATE

    */

    function inputCover(artStory_elData, elementA) {
      artStory_elData.setAttribute("src", elementA["cover"]);
      artStory_elData.setAttribute("title", elementA["title"]);
      artStory_elData.setAttribute("alt", elementA["title"]);
    }
    function create_inputList(artStory_elData, content) {
      const li = document.createElement("li");
      li.textContent = content;

      if (artStory_elData === 0) {
        return li;
      } else {
        artStory_elData.appendChild(li);
      }
    }
    function create_inputListLink(artStory_elData, content, link) {
      const li = document.createElement("li");
      const a = document.createElement("a");

      a.textContent = content;
      a.setAttribute("href", link);

      li.appendChild(a);
      artStory_elData.appendChild(li);
    }
    function set_mainContents(keyB, elementD, elementE) {
      const artStory_elChapsCountMain = artStory.querySelector(
        `[data-story="${keyB}ChapsCount"]`
      );
      const artStory_elMainChapters = artStory.querySelector(
        `[data-story="main-chapters"]`
      );

      artStory_elChapsCountMain.textContent = Object.values(elementE).reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );

      // IF'S
      if (elementD["rankClass"] === "Main") {
        for (const keyF in elementE) {
          if (Object.hasOwnProperty.call(elementE, keyF)) {
            const elementF = elementE[keyF];
            const elLi_2 = document.createElement("li");
            let text_1;

            if (keyF === "chapters") {
              text_1 = document.createTextNode(`${elementF} Chapters`);
            } else if (keyF === "interlude") {
              text_1 = document.createTextNode(`${elementF} Interlude`);
            } else if (keyF === "extraChapters") {
              text_1 = document.createTextNode(`${elementF} Extra Chapters`);
            } else if (keyF === "sideStory") {
              text_1 = document.createTextNode(`${elementF} Side Story`);
            } else if (keyF === "afterword") {
              text_1 = document.createTextNode(`${elementF} Afterword`);
            }

            elLi_2.appendChild(text_1);
            artStory_elMainChapters.appendChild(elLi_2);
          }
        }
      }
    }
    function create_inputListTranslated(keyC, elementD) {
      const artStory_elTranslatedList = artStory.querySelector(
        `[data-story="translatedList"]`
      );
      /*
        - CREATE LIST
        - CREATE LINK / FLAG / STATUS / TOTAL CHAPS
      */
      const elLi_3 = document.createElement("li");
      const elA_3 = document.createElement("a");
      const elImg_2 = document.createElement("img");

      elLi_3.setAttribute("class", "flex--present");
      elImg_2.setAttribute("class", "flag ");
      elImg_2.setAttribute("src", `${flag[keyC]}`);

      for (const keyE in elementD) {
        if (Object.hasOwnProperty.call(elementD, keyE)) {
          const elementE = elementD[keyE];

          if (keyE === "name") {
            elA_3.textContent = elementE;
          } else if (keyE === "link") {
            elA_3.setAttribute("href", elementE);

            elLi_3.appendChild(elA_3);
            elLi_3.appendChild(document.createTextNode(" ("));
            elLi_3.appendChild(elImg_2);
          } else if (keyE === "status") {
            const elB_3 = document.createElement("b");
            const text_2 = document.createTextNode(elementE);

            elB_3.appendChild(text_2);
            elLi_3.appendChild(elB_3);
            elLi_3.appendChild(document.createTextNode(" / "));
          } else if (keyE === "chapsRange") {
            console.log(elementE);

            const text_3 = document.createTextNode(
              Object.values(elementE).reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              )
            );

            elLi_3.appendChild(text_3);
            elLi_3.appendChild(document.createTextNode(" Chs.)"));
          }
        }
      }

      artStory_elTranslatedList.appendChild(elLi_3);
    }
    function create_inputListMTL(keyC, elementC) {
      const artStory_elMTLList = artStory.querySelector(
        `[data-story="mtlList"]`
      );
      const elLi_4 = document.createElement("li");
      const elImg_3 = document.createElement("img");
      let mtlItemsLangsCount = 0;

      console.log(artStory_elMTLList);

      elLi_4.setAttribute("class", `flex--present`);
      elImg_3.setAttribute("src", `${flag[keyC]}`);
      elImg_3.setAttribute("class", `flag `);

      elLi_4.appendChild(elImg_3);
      elLi_4.appendChild(document.createTextNode(`${keyC}`));

      for (const keyD in elementC) {
        if (Object.hasOwnProperty.call(elementC, keyD)) {
          mtlItemsLangsCount++;
        }
      }

      elLi_4.appendChild(document.createTextNode(` (${mtlItemsLangsCount})`));
      artStory_elMTLList.appendChild(elLi_4);
    }

    /*

    INPUTS 

    */

    function inputLink(artStory_elData, keyB, elementB) {
      if (keyB) {
      }
      // KEY C
      for (const keyC in elementB) {
        if (Object.hasOwnProperty.call(elementB, keyC)) {
          const elementC = elementB[keyC];

          // IF CONTENT OR LINK
          if (keyC === "content") {
            if (keyB === "language") {
              const elImg_4 = document.createElement("img");
              elImg_4.setAttribute("src", `${flag[elementC]}`);
              elImg_4.setAttribute("class", "flag left");

              artStory_elData.appendChild(elImg_4);
              artStory_elData.appendChild(document.createTextNode(elementC));
            } else {
              artStory_elData.textContent = elementC;
            }

            // IF AUTHOR OR NOT
            if (keyB === "author") {
              const artStory_elAltAuthors = artStory.querySelector(
                `[data-story="altAuthors"]`
              );
              create_inputList(artStory_elAltAuthors, elementC);
            }
          } else if (keyC === "link") {
            artStory_elData.setAttribute("href", elementC);
          }
        }
      }
    }
    function inputList(artStory_elData, keyB, elementB) {
      if (
        elementB.length >= 1 &&
        (keyB === "achievements" || keyB === "tags")
      ) {
        const artStory_elCounts = artStory.querySelector(
          `[data-story="${keyB}Count"]`
        );
        artStory_elCounts.textContent = elementB.length;
      }

      for (let iB = 0; iB < elementB.length; iB++) {
        const elementItem = elementB[iB];

        if (keyB === "synopsis") {
          const p = document.createElement("p");

          p.textContent = elementItem;

          artStory_elData.appendChild(p);
        } else {
          create_inputList(artStory_elData, elementItem);
        }
      }
    }
    function inputListLink(artStory_elData, keyB, elementB) {
      for (const keyC in elementB) {
        if (Object.hasOwnProperty.call(elementB, keyC)) {
          const elementC = elementB[keyC];

          if (keyB === "relatedSeries") {
            create_inputListLink(
              artStory_elData,
              elementC["title"],
              elementC["link"]
            );
          } else {
            create_inputListLink(artStory_elData, keyC, elementC);
          }
        }
      }
    }
    function inputReads(keyB, elementB) {
      const artStory_elReadSelection = artStory.querySelector(
        `[data-ctr="reads-${keyB}"]`
      );
      const artStory_elLangsCount = artStory.querySelector(
        `[data-story="${keyB}LangsCount"]`
      );
      let languagesCount = 0;

      // FOR KEY C LANGUAGES SELECTION - CREATE AN ARTICLE
      for (const keyC in elementB) {
        if (Object.hasOwnProperty.call(elementB, keyC)) {
          const elementC = elementB[keyC];

          if (keyB !== "main") {
            languagesCount++;
            if (keyB === "mtl") {
              create_inputListMTL(keyC, elementC);
            }
          }

          /*          
          CREATE ARTICLES
          */
          const elArticle_1 = document.createElement("article");
          // IN ARTICLE A
          const elH4_1 = document.createElement("h4");
          const elOl_1 = document.createElement("ol");
          // IN H4 A
          const elSpan_1 = document.createElement("span");
          const elB_1 = document.createElement("b");
          // IN SPAN A
          const elA_1 = document.createElement("a");
          // IN A A
          const elImg_1 = document.createElement("img");

          /*
          SET ATTRIBUTES
          */
          elArticle_1.setAttribute("data-ctr", "reads");
          // IN ARTICLE A
          elOl_1.setAttribute("class", "item");
          // IN H4 A
          elB_1.setAttribute("class", "center");
          // IN SPAN A
          elA_1.setAttribute("href", "#");
          elA_1.setAttribute("class", "button");
          elA_1.setAttribute("onclick", "return false");
          elA_1.setAttribute("href", "#");
          // IN A A
          elImg_1.setAttribute("src", `${flag[keyC]}`);
          elImg_1.setAttribute("alt", keyC);
          elImg_1.setAttribute("title", keyC);
          elImg_1.setAttribute("class", "flag");

          /*
          APPEND 
          */
          // IN ARTICLE A
          elArticle_1.appendChild(elH4_1);
          elArticle_1.appendChild(elOl_1);
          // IN H4 A
          elH4_1.appendChild(elSpan_1);
          elH4_1.appendChild(elB_1);
          // IN SPAN A
          elSpan_1.appendChild(elA_1);
          // IN A A
          elA_1.appendChild(elImg_1);

          /*
          SET CONTENTS
          */
          elB_1.textContent = "Chapters";
          elA_1.appendChild(document.createTextNode(`・${keyC}`));

          // KEY D - ITEMS OF LANGUAGES SELECTION
          for (const keyD in elementC) {
            if (Object.hasOwnProperty.call(elementC, keyD)) {
              const elementD = elementC[keyD];

              /*  
          CREATE LIST
          */
              //  IN OL A
              const elLI_1 = document.createElement("li");
              // IN LI A
              const elSpan_2 = document.createElement("span");
              const elB_2 = document.createElement("b");
              const elSpan_3 = document.createElement("span");
              // IN SPAN 2
              const elSpan_4 = document.createElement("span");
              const elA_2 = document.createElement("a");

              /*    
              SET ATTRIBUTES    
              */
              // IN LI A
              elSpan_2.setAttribute("class", "flex--present");
              elB_2.setAttribute("class", "center");
              elSpan_3.setAttribute("class", "center passive");
              // IN SPAN C
              elSpan_4.setAttribute(
                "class",
                "content--main material-symbols-outlined"
              );

              if (keyB === "translated") {
                create_inputListTranslated(keyC, elementD);
              }

              // KEY E - PROPERTIES
              for (const keyE in elementD) {
                if (Object.hasOwnProperty.call(elementD, keyE)) {
                  const elementE = elementD[keyE];

                  // IF'S
                  if (keyE === "rankClass") {
                  } else if (keyE === "itemType") {
                    if (elementE === "Website") {
                      elSpan_4.textContent = "language";
                    } else if (elementE === "eBook") {
                      elSpan_4.textContent = "book_2";
                      eBooksCount++;
                    }

                    /*
                    APPEND CHILD
                    */
                    elSpan_2.appendChild(elSpan_4);
                    //  -
                  } else if (keyE === "name") {
                    elA_2.textContent = elementE;
                  } else if (keyE === "link") {
                    elA_2.setAttribute("href", elementE);

                    /*
                    APPEND CHILD
                    */
                    elSpan_2.appendChild(elA_2);
                    // -
                  } else if (keyE === "context") {
                    if (elementE.length !== "") {
                      const text_4 = document.createElement("span");
                      text_4.textContent = `(${elementE})`;

                      elSpan_2.appendChild(text_4);
                    }
                  } else if (keyE === "status") {
                    elB_2.textContent = elementE;

                    if (elementD["rankClass"] === "Main") {
                      const artStory_elMainStatus = artStory.querySelectorAll(
                        `[data-story="main-status"]`
                      );

                      for (
                        let iC = 0;
                        iC < artStory_elMainStatus.length;
                        iC++
                      ) {
                        const elStatusMain = artStory_elMainStatus[iC];

                        elStatusMain.textContent = elementE;
                      }
                    }
                  } else if (keyE === "chapsRange") {
                    if (
                      elementD["rankClass"] === "Main" ||
                      elementD["rankClass"] === "Main English"
                    ) {
                      set_mainContents(keyB, elementD, elementE);
                    }
                  } else if (keyE === "chapFirst") {
                    elSpan_3.appendChild(
                      document.createTextNode(
                        `${elementE} - ${elementD["chapLast"]}`
                      )
                    );
                  }
                }
              }
              /*
                APPEND CHILD
                */

              elOl_1.appendChild(elLI_1);

              elLI_1.appendChild(elSpan_2);
              elLI_1.appendChild(elB_2);
              elLI_1.appendChild(elSpan_3);
            }
          }
          artStory_elReadSelection.appendChild(elArticle_1);
        }
      }

      if (keyB !== "main") {
        artStory_elLangsCount.textContent = languagesCount;
      }

      artStory.querySelector(`[data-story="eBooksCount"]`).textContent =
        eBooksCount;
    }

    /*


    */

    // KEY A
    for (const keyA in story) {
      if (Object.hasOwnProperty.call(story, keyA)) {
        const elementA = story[keyA];

        // KEY B
        for (const keyB in elementA) {
          if (Object.hasOwnProperty.call(elementA, keyB)) {
            const elementB = elementA[keyB];

            // IF'S
            if (keyA !== "reads") {
              const artStory_elData = artStory.querySelector(
                `[data-story="${keyB}"]`
              );

              if (keyA === "generic") {
                if (keyB === "cover") {
                  inputCover(artStory_elData, elementA);
                } else {
                  artStory_elData.textContent = elementB;
                }
              } else if (keyA === "link") {
                inputLink(artStory_elData, keyB, elementB);
              } else if (keyA === "list") {
                // IF EMPTY OR NOT
                if (elementB.length >= 1) {
                  if (keyB === "synopsis") {
                    const artStory_elSynopsis = artStory.querySelector(
                      `[data-story="synopsis"]`
                    );

                    inputList(artStory_elSynopsis, keyB, elementB);
                  } else {
                    inputList(artStory_elData, keyB, elementB);
                  }
                } else {
                  // IF AUTHORS ALT OR NOT
                  if (keyB !== "altAuthors") {
                    notAvailable(artStory_elData);
                  }
                }
              } else if (keyA === "listLink") {
                // IF EMPTY OR NOT
                if (Object.keys(elementB).length >= 1) {
                  inputListLink(artStory_elData, keyB, elementB);

                  if (keyB === "genres") {
                    artStory.querySelector(
                      `[data-story="${keyB}Count"]`
                    ).textContent = Object.keys(elementB).length;
                  }
                } else {
                  notAvailable(artStory_elData);
                }
              }
            } else {
              if (Object.keys(elementB).length >= 1) {
                inputReads(keyB, elementB);
              } else {
                const artStory_elMTLTransList = artStory.querySelector(
                  `[data-story="${keyB}List"]`
                );
                const artStory_elReads = artStory.querySelector(
                  `[data-ctr="reads-${keyB}"]`
                );
                console.log(artStory_elReads);

                notAvailable(artStory_elMTLTransList);
                notAvailable(artStory_elReads, 1);
              }
            }
          }
        }
      }
    }
  }

  function pckTabs() {
    for (let i = 0; i < artStories.length; i++) {
      const e = artStories[i];

      const ctrTabs = e.querySelectorAll(`[data-ctr="tabs"]`);

      for (let j = 0; j < ctrTabs.length; j++) {
        const f = ctrTabs[j];

        const ctrTabsSwitches = f.querySelector(
          `:scope > [data-ctr="tabsSwitches"]`
        );
        const tabsSwitches =
          ctrTabsSwitches.querySelectorAll(`:scope > .button`);

        const ctrTabsItems = f.querySelector(`:scope > [data-ctr="tabsItems"]`);
        const tabsItems = ctrTabsItems.querySelectorAll(`:scope > .item`);

        for (let k = 0; k < tabsSwitches.length; k++) {
          const g = tabsSwitches[k];

          g.addEventListener("click", () => {
            ctrTabsSwitches
              .querySelector(`:scope > .active`)
              .classList.toggle("active");
            g.classList.toggle("active");

            ctrTabsItems
              .querySelector(`:scope > .show`)
              .classList.toggle("show");
            tabsItems[k].classList.toggle("show");
          });
        }
      }
    }
  }
  function pckReads() {
    for (let i = 0; i < artStories.length; i++) {
      const e = artStories[i];

      const ctrReads = e.querySelectorAll(`[data-ctr="reads"]`);

      for (let j = 0; j < ctrReads.length; j++) {
        const f = ctrReads[j];

        const readsSwitch = f.querySelector(`.button`);

        readsSwitch.addEventListener("click", () => {
          readsSwitch.classList.toggle(`active`);
          f.querySelector(`.item`).classList.toggle(`height--full`);
        });
      }
    }
  }

  pckTabs();
  pckReads();
}
