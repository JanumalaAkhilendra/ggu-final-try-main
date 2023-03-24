import Link from "next/link";
// import Layout from "../src/layout/Layout";
// import PageBanner from "../src/layout/PageBanner";
const StudentCordinators = () => {

    return (
       /*  eslint-disable @next/next/no-img-element */
        <section>
            <div className="container">
            {/* <h3
          className="fn__maintitle big"
          data-text="Student Co-ordinators"
          data-align="center"
            >
          Student Co-ordinators
        </h3> */}
        <div className="metaportal_fn_similar student">
            <h3 className="fn__maintitle" data-text="Student Co-ordinators">
            Student Co-ordinators
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="metaportal_fn_drops">
              <ul className="grid">
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src="/img/studentCoordinator/student_1.webp" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                    <h3 className="fn__maintitle upper" data-text="Yash Gupta">
                      Yash Gupta
                    </h3>
                      <h3 className="fn_title">
                        <a href="#">Overall Co-Ordinator</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src="/img/studentCoordinator/student_2.webp" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                    <h3 className="fn__maintitle upper" data-text="Yash Gupta">
                      Yash Gupta
                    </h3>
                      <h3 className="fn_title">
                        <a href="#">Overall Co-Ordinator</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src="/img/studentCoordinator/student_3.webp" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                    <h3 className="fn__maintitle upper" data-text="Yash Gupta">
                      Yash Gupta
                    </h3>
                      <h3 className="fn_title">
                        <a href="#">Overall Co-Ordinator</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src="/img/studentCoordinator/student_4.webp" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                    <h3 className="fn__maintitle upper" data-text="Yash Gupta">
                      Yash Gupta
                    </h3>
                      <h3 className="fn_title">
                        <a href="#">Overall Co-Ordinator</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src="/img/studentCoordinator/student_5.webp" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                    <h3 className="fn__maintitle upper" data-text="Yash Gupta">
                      Yash Gupta
                    </h3>
                      <h3 className="fn_title">
                        <a href="#">Overall Co-Ordinator</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src="/img/studentCoordinator/student_6.webp" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                    <h3 className="fn__maintitle upper" data-text="Yash Gupta">
                      Yash Gupta
                    </h3>
                      <h3 className="fn_title">
                        <a href="#">Overall Co-Ordinator</a>
                      </h3>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </section>
    );
};

export default StudentCordinators;
