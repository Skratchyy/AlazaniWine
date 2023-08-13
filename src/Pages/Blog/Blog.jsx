import "./Blog.css";
import Header from "../../Components/Header/Header";
import bgWriting from "../../assets/bg-text-colorless.png";
import mainImg from "../../assets/home/mika-baumeister-4gen9BdDbwQ-unsplash.jpg";
import secondaryImg from "../../assets/home/IMG_2015.jpg";
import secImg from "../../assets/home/308338532_600748015177022_1323801320146095727_n.jpg";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="blog_wrapper">
      <Header geLang={false} shouldRender={true} />
      <img src={bgWriting} alt="" id="blog_bg_writing1" />
      <img src={bgWriting} alt="" id="blog_bg_writing2" />

      <div className="blog_content">
        <div className="blog_first_cont">
          <p id="blog_first_txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc velit
            enim, commodo ut ornare et, finibus
          </p>
          <div className="blog_first_cont_img">
            <img src={mainImg} alt="" />
          </div>
        </div>
        <div className="blog_secondary_cont">
          <div className="dark_bg_blog">
            <div className="dark_bg_blog_content">
              <h1>წარმოება</h1>
              <p id="blog_sec_txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vestibulum enim ut nisl pretium, et pulvinar libero condimentum.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Pellentesque dolor nisi, lobortis ut
                porttitor id, placerat eget ligula. Curabitur vitae nisi tellus.
                Sed ut maximus mi. Etiam iaculis vulputate diam a consequat.
              </p>
            </div>
          </div>
          <div className="lite_bg_blog">
            <div className="blog_lite_bg_content">
              <h1>ღვინის ტექნოლოგია</h1>
              <p id="blog_sec_txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                velit enim, commodo ut ornare et, finibus commodo urna. Maecenas
                suscipit lorem non cursus aliquam. Cras vel lectus vel ante
                iaculis ultrices vel eget enim. Aenean semper pellentesque
                lorem, nec posuere libero tristique sed.
              </p>
            </div>
          </div>
        </div>
        <div className="blog_posts">
          <div className="blog_first_post">
            <div className="blog_post_img">
              <img src={secondaryImg} alt="" />
            </div>
            <div className="blog_post_content">
              <h1>ადგილმდებარეობა</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                velit enim, commodo ut ornare et, finibus commodo urna.
              </p>
              <Link id="blog_post__link">წაკითხვა &gt;&gt;</Link>
            </div>
          </div>
          <div className="blog_sec_post">
            <div className="blog_post_img">
              <img src={secImg} alt="" />
            </div>
            <div className="blog_post_content">
              <h1>ადგილმდებარეობა</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                velit enim, commodo ut ornare et, finibus commodo urna.
              </p>
              <Link id="blog_post__link">წაკითხვა &gt;&gt;</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
