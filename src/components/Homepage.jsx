import Brand from "../includes/Brand";
import Footer from "../includes/Footer";
import Header from "../includes/Header";
import League from "../includes/League";
import Newitem from "../includes/Newitem";
import Paymentservice from "../includes/Paymentservice";
import Popularitem from "../includes/Popularitem";
import Promotion from "../includes/Promotion";
import Service from "../includes/Service";
import './../styles/customer_category.css'
import banner from './../images/Banner/bkcover.jpg'
import './../styles/popularitem.css'
import './../styles/sharetitle.css'
import './../styles/bodysection.css'
import banner2 from './../images/Banner/Banner.png'
const Homepage = ()=>{
    return(
        <div>
            <Header></Header>
            {/* customer categories */}
            <div className="customer-category__div-1">
                <div className="customer-category__div-2 customer-category-1-p">
                    <p>បុរស</p>
                </div>
                <div className="customer-category__div-3 customer-category-1-p">
                    <p>នារី</p>
                </div>
                <div className="customer-category__div-4 customer-category-1-p">
                    <p>ក្មេង</p>
                </div>
                <div className="customer-category__div-5 customer-category-1-p">
                    <p>សម្ភារ:</p>
                </div>
                <div className="customer-category__div-6 customer-category-1-p">
                    <p>លាងឃ្លាំង</p>
                </div>
            </div>
            {/* body section */}
            <div className="customer-category__div-7">
            <div className="customer-category__div-8">
                <img src={banner} alt="image" />
            </div>
            <div className="share-item__div-1">
                <div className="share-item__div-2">
                    <h2>ក្លឹបបាល់ទាត់លីគកំពូល</h2>
                </div>
            </div>
            <League></League>
            <div class="share-item__div-1">
                <div class="share-item__div-2">
                <h2 >សម្ភារ:ពេញនិយម</h2>
                </div>
                
            </div>
            <Popularitem></Popularitem>
            <div className="share-item__div-1">
                <div className="share-item__div-2">
                <h2>សម្ភារ:ថ្មីៗ</h2>
                </div>
                
            </div>
            <Newitem></Newitem>
            </div>
            <div className="body-section__div-1">
                <img src={banner2} alt="banner" />
            </div>
            <div className="customer-category__div-7">
            <Promotion></Promotion>
            <div className="share-item__div-1">
                <div className="share-item__div-2 share-item__div-2-small">
                <h2>ប្រ៊េន</h2>
                </div>
            </div>
            <Brand></Brand>
            
            <div className = "homepage-div-1">
                <div className="homepage-div-2">
                <div className="share-item__div-1">
                    <div className="share-item__div-2 share-item__div-2-small">
                        <h2>សេវាកម្មដឹកជញ្ជូន</h2>
                    </div>
                </div>
                <Service></Service>
                </div>
                <div className="homepage-div-3">
                <div className="share-item__div-1">
                    <div className="share-item__div-2 share-item__div-2-small">
                        <h2>សេវាកម្មបង់ប្រាក់</h2>
                    </div>
                    
                </div>
                <Paymentservice></Paymentservice>
                </div>
                </div>
            </div>
            <Footer></Footer>
            
        </div>
    )
}
export default Homepage;