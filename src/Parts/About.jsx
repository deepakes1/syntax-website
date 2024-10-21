import React from 'react';
import Carousel from '../Parts/Carousel';
const About = () => {
    return (
        <>
            <Carousel/>

            <div className="college-info-container p-5">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Government College of Engineering, Erode</h1>
            <p className='text-xl md:text-2xl font-semibold'>
                The Government College of Engineering in Erode, formerly known as Institute of Road and Transport Technology (IRTT), is a premier government engineering college affiliated with Anna University in Chennai. Established in 1984, it is located on a 200-acre lush green campus between Chithode and Bhavani in the Erode district, providing a conducive atmosphere for technical education.
            </p>
            
            <h2 className="text-xl md:text-3xl font-semibold mt-4 mb-3">Courses Offered</h2>
            <p  className='text-xl md:text-2xl font-semibold'>
                The college offers various undergraduate and postgraduate courses, including Computer Science and Engineering, with well-equipped laboratories, a library, and highly qualified faculty members. The Computer Science department is particularly notable, with its focus on producing quality professionals to meet the industry's evolving needs.
            </p>
            
            <h3 className="text-2xl md:text-3xl font-semibold mt-4">Department of Computer Science and Engineering Highlights:</h3>
            <ul className="list-disc list-inside ml-5 text-lg md:text-xl font-bold mb-4">
                <li className='mt-3'>State-of-the-art laboratories: CSE Lab-1, CSE Lab-2 providing hands-on experience with the latest technologies.</li>
                <li>Digital library: Access to digital contents for better understanding of theoretical concepts.</li>
                <li>Research activities: Faculty members are involved in research projects, ensuring students are exposed to cutting-edge technologies.</li>
                <li>Industry collaborations: Partnerships with leading IT organizations, enabling students to gain practical insights.</li>
                <li>Placement opportunities: Students have been placed in reputable companies like TCS, CTS, and Capgemini.</li>
            </ul>

            <h3 className="text-xl md:text-3xl font-semibold mt-4 mb-3">Faculty and Staff:</h3>
            <p className='text-xl md:text-2xl font-semibold'>
                The Computer Science department is led by Dr. A. Saradha, with a team of experienced professors, associate professors, and assistant professors. The faculty members have specialized areas of expertise, including Semantic Web, Neural Networks, and Software Engineering.
            </p>
        </div>
        </>
    );
};

export default About;