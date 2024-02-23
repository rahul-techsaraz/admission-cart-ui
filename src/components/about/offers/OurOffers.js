import { CollegeSection } from "./CollegesSection"
export  const OurOffering = ()=>{

    return (
            <section class="offering-section section-padding pt-4">
        <div class="container">
            <div class="row">
                <div class="col-12 mb-5">
                    <h1 class="section-heading text-start">Our Offerings</h1>
                    <p class="section-subheading text-start">We simplify international admissions for students, universities & our partners</p>
                </div>
            </div>
            <div class="row">
               <CollegeSection/>
               <CollegeSection/>
              <CollegeSection/>
             <CollegeSection/>
                 <CollegeSection/>
               <CollegeSection/>
              <CollegeSection/>
             <CollegeSection/>
                
            </div>
        </div>
    </section>
    )
}