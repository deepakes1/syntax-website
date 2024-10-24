import React, { useEffect, useRef, useState } from 'react';
import Carousel from '../Parts/Carousel';

const About = () => {
    const [visibleSections, setVisibleSections] = useState({
        intro: false,
        courses: false,
        vision: false,
        message: false,
        goals: false,
        objectives: false,
    });

    const sectionsRef = useRef([]);

    const handleScroll = (entries) => {
        entries.forEach(entry => {
            // Set visibility based on intersection status
            setVisibleSections(prev => ({
                ...prev,
                [entry.target.id]: entry.isIntersecting,
            }));
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleScroll, {
            threshold: 0.1, // Adjust this for how much of the section should be visible
        });

        sectionsRef.current.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionsRef.current.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <>
        <div className="mt-20 lg:mt-20 p-7">
            <Carousel/>

            <div className={`college-info-container p-5`}>

                <div id="intro" ref={el => sectionsRef.current[0] = el} className={` section p-5 border rounded-tl-3xl rounded-br-3xl border-black ${visibleSections.intro ? 'visible' : ''}`}>
                    <h1 className="text-2xl md:text-4xl mt-5 font-extrabold mb-4">Government College of Engineering, Erode</h1>
                    <p className='text-xl md:text-2xl font-semibold'>
                        The college was established in <span className='font-extrabold'>1984</span> under Institute of Road and Transport by the Tamil Nadu State Transport Corporation. In 2021, the college was transferred to under the governance of Directorate of Technical Education (DoTE) and subsequently renamed as Government College of Engineering, Erode. It is a premier Government Engineering College <span className='font-extrabold'>affiliated to Anna University, Chennai</span>. The Institute is located on a sprawling lush green campus of 200 acres between Chithode and Bhavani in Erode district. It provides a congenial atmosphere for Technical Education. The Institute has excellent infrastructure, well-equipped laboratories, library and highly qualified & experienced faculty members. The Institute is well known for its technical excellence, modern facilities, research activities, good academic performance track record and more placements with high salary package. This Institute is functioning as the Zonal Headquarters for Zone-XI (Erode Zone) of Anna University monitoring the Engineering colleges affiliated to Anna University in Erode district and part of Namakkal, Tiruppur and Salem districts.
                    </p>
                </div>

                <div id="courses" ref={el => sectionsRef.current[1] = el} className={`section rounded-tl-3xl rounded-br-3xl mt-5 p-5 border border-black ${visibleSections.courses ? 'visible' : ''}`}>
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-4 mt-5">Our Mission</h2>
                    <p className='text-xl md:text-2xl font-semibold'>
                       Our mission at Government College of Engineering, Erode is to deliver quality engineering education, drive research and innovation, promote entrepreneurship, and shape students into responsible, socially aware leaders dedicated to national progress.
                    </p>
                </div>

                <div id="vision" ref={el => sectionsRef.current[2] = el} className={`section rounded-tl-3xl rounded-br-3xl mt-5 p-5 border border-black ${visibleSections.vision ? 'visible' : ''}`}>
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-4 mt-5">Our Vision</h2>
                    <p className='text-xl md:text-2xl font-semibold'>
                        We aim to inspire young minds through value-based education, fostering knowledge, skills, character, and innovation to cultivate leaders and professionals who contribute to global society.
                    </p>
                </div>

                <div id="message" ref={el => sectionsRef.current[3] = el} className={`section rounded-tl-3xl rounded-br-3xl mt-5 p-5 border border-black ${visibleSections.message ? 'visible' : ''}`}>
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-4 mt-5">Principle Message</h2>
                    <p className='text-xl md:text-2xl font-semibold'>
                       A warm welcome to all the aspiring engineers joining Government College of Engineering, Erode (formerly IRTT). With the support of our highly qualified and dedicated faculty, we are committed to shaping our students into industry-ready professionals.
                            We view students, parents, and society as key stakeholders, and our goal is to ensure their satisfaction. At our college, discipline is a top priority. Regular tests and exams are conducted to ensure strong performance in university assessments. We also have an active Training and Placement Cell dedicated to securing placements for all students. Equal importance is given to extracurricular and co-curricular activities.
                            With excellent infrastructure and a conducive learning environment, we are confident that students will have a fulfilling and enriching four years of study. Together, we strive to nurture future leaders—scientists, engineers, entrepreneurs, managers, and researchers—through quality education.
                    </p>
                </div>

                <div id="goals" ref={el => sectionsRef.current[4] = el} className={`section rounded-tl-3xl rounded-br-3xl mt-5 p-7 border border-black ${visibleSections.goals ? 'visible' : ''}`}>
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-4 mt-5">Goals</h2>
                    <ul style={{listStyleType : "disc"}} className='text-xl md:text-2xl font-semibold'>
                        <li>To strengthen students' learning abilities by improving both their technical and soft skills.</li>
                        <li>To establish an effective system that encourages students to develop professional and entrepreneurial skills with a focus on social and environmental significance.</li>
                        <li>To foster a research-oriented mindset among students to tackle national and global challenges.</li>
                    </ul>
                </div>

                <div id="objectives" ref={el => sectionsRef.current[5] = el} className={`mt-5 rounded-tl-3xl rounded-br-3xl section p-8 border border-black ${visibleSections.objectives ? 'visible' : ''}`}>
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-4 mt-5">Objectives</h2>
                    <ul style={{listStyleType : "disc"}} className='text-xl md:text-2xl font-semibold'>
                        <li>To provide quality education and instill universal human values in students.</li>
                        <li>To promote self-learning and independent skill development.</li>
                        <li>To collaborate with national and international industries to prepare students for the workforce.</li>
                        <li>To foster research skills in students to address environmental, social, and economic challenges.</li>
                    </ul>
                </div>

            </div>
        </div>
        </>
    );
};

export default About;
