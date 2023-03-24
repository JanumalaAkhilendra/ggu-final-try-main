/*  eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect } from "react";

const Collection = () => {
  useEffect(() => {
    const collection = document.querySelector(".fn_cs_collection");
    var items = collection.querySelectorAll(".item");
    var itemsLength = items.length;
    setInterval(function () {
      var numberOne = Math.floor(Math.random() * itemsLength);
      var numberTwo = Math.floor(Math.random() * itemsLength);

      while (numberTwo === numberOne) {
        numberTwo = Math.floor(Math.random() * itemsLength);
      }
      var firstDiv = items[numberOne];
      var secondDiv = items[numberTwo];
      var firstImage = firstDiv.querySelector("input").value;
      var secondImage = secondDiv.querySelector("input").value;
      firstDiv.classList.add("ready");
      secondDiv.classList.add("ready");
      // console.log(firstDiv.querySelector("input").value == firstDiv);
      setTimeout(function () {
        // console.log(secondDiv.querySelector("input").value == firstDiv);
        // firstDiv.querySelector("input").value == secondImage;
        // firstDiv.querySelector(".abs_img").style.backgroundImage =
        //   "url(" + secondImage + ")";
        // // secondDiv.querySelector("input").val(firstImage);
        // secondDiv.querySelector("input").value == firstDiv;
        // console.log(secondDiv.querySelector("input").value);
        // secondDiv.querySelector(".abs_img").style.backgroundImage =
        //   "url(" + firstImage + ")";

        firstDiv.classList.remove("ready");
        secondDiv.classList.remove("ready");
      }, 500);
    }, 2000);
  }, []);

  return (
    <section id="collection">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Photo Gallery"
          data-align="center"
        >
          Photo Gallery
        </h3>
        <div className="fn_cs_collection">
          <div className="collection_top">
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/photo_gallary_1.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/photo_gallary_1.webp" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/photo_gallary_2.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/photo_gallary_2.webp" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/photo_gallary_3.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/photo_gallary_3.webp" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/photo_gallary_4.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/photo_gallary_4.webp" />
            </div>
          </div>
          <div className="collection_bottom">
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/photo_gallary_5.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/photo_gallary_5.webp" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/photo_gallary_6.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/photo_gallary_6.webp" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/photo_gallary_7.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/photo_gallary_7.webp" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/photo_gallary_8.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/photo_gallary_8.webp" />
            </div>
          </div>
        </div>
        <div className="fn_cs_desc">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute.
          </p>
          <Link href="/collection">
            <a className="metaportal_fn_button">
              <span>View Timeline of Events</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Collection;
