window.portfolioProjects = [
  // MonSol
  {
    id: "monsol-solar",
    discipline: "Mechanical",
    title: "Industry Innovation Program with MonSol",
    dates: "Jul 2025 – Present",
    shortDescription: "Designing mechanical frames for modular Concertina solar technology.",
    skills: ["CAD", "FEA", "Mechanical Design", "Renewable Energy", "Solar Engineering", "Prototyping", "Harmonic Testing"],
    links: [
      { label: "MonSol", url: "https://monsol.energy" },
      { label: "Monash MonSol Website", url: "https://www.monash.edu/monash-innovation/impact/generator-founders/monsol" }
    ],
    contentHtml: `
      <p>
        I worked with lead engineers, PhD researchers, and academic staff to design a mechanical fixed-tilt photovoltaic array frame
        for integration with MonSol’s patented Concertina solar technology.
      </p>
      <p>
        My focus was on developing lightweight, low-cost, and modular structural solutions suitable for scalable renewable energy deployments.
        I fabricated two full-scale prototype frames that are currently deployed on site, enabling real-world validation.
      </p>
      <p>
        Through iterative CAD development and FEA-driven analysis, I refined the design to optimise structural performance,
        manufacturability, and long-term durability while balancing practical cost constraints.
      </p>
      </p>
      <div class="project-images-container">
          <div class="project-image">
              <img src="Media/Portfolio/monsol-solar/MonSol1.jpg" alt="MonSol Image 1">
          </div>
          <div class="project-image">
              <img src="Media/Portfolio/monsol-solar/MonSol2.jpg" alt="MonSol Image 2">
          </div>
      </div>

      <style>
      .project-images-container {
          display: flex;
          justify-content: center;
          gap: 0.5rem; /* space between images */
          flex-wrap: wrap; /* wrap to next line on smaller screens */
          margin-top: 1rem;
      }

      .project-image img {
          max-width: 100%;
          max-height: 500px;
          border-radius: 8px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.35);
          object-fit: contain;
          flex: 1 1 45%; /* take about 45% of container, shrink if needed */
      }
      </style>
    `
  },
  
  // CentrelinkHelper
  {
    id: "centrelinkhelper",
    discipline: "Software",
    title: "CentrelinkHelper - Website Development",
    dates: "Jan 2025 – Present",
    shortDescription: "Website I designed to assist users navigating Centrelink processes.",
    skills: ["HTML", "CSS", "JavaScript"],
    links: [
      { label: "CentrelinkHelper.au", url: "https://centrelinkhelper.au" },
      { label: "GitHub Repository", url: "https://github.com/TorstenMundtEngineer/CentrelinkHelper" }
    ],
    contentHtml: `
      <p>
        I designed and built CentrelinkHelper as a web-based tool to simplify Centrelink workflows for users.
        I developed the entire website independently using HTML, CSS, and JavaScript.
      </p>
      <p>
        The idea originated from my own difficulty calculating how income from a casual job affected my Youth Allowance on a weekly basis.
      </p>
      <p>
        Within six months, the site achieved over 88,000 Google impressions and 2,000+ clicks, entirely through organic search traffic with no paid advertising.
      </p>

      <div class="project-image">
        <img src="Media/Portfolio/centrelinkhelper/CentrelinkHelper.webp" alt="CentrelinkHelper web application screenshot">
      </div>

      <style>
        .project-image {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
        }
        .project-image img {
            max-width: 100%;
            max-height: 420px;
            border-radius: 8px;
            box-shadow: 0 6px 16px rgba(0,0,0,0.35);
            object-fit: contain;
        }
      </style>
    `
  },

  // Tracked Robot
  {
    id: "tracked-robot",
    discipline: "Robotics",
    title: "Tracked Robot – Uneven Terrain Traversal",
    dates: "Jul 2025 – Dec 2025",
    shortDescription: "Tracked robot engineered to traverse challenging, uneven terrain.",
    skills: ["Mechanical Design", "CAD", "3D Printing", "Electrical Systems", "Control Systems", "Sensors"],
    links: [],
    contentHtml: `
      <p>
        I designed and built a tracked robot capable of navigating uneven and bumpy terrain.
        What began as a university project evolved into a personal project to further refine performance and robustness. It is still being constantly improved upon.
      </p>
      <p>
        The robot features dual PLA 3D-printed tracks with ridged linkages for traction,
        powered by high-torque N20 motors. The payload includes a gimbal camera, ESP-32 CAM,
        STM32 microcontroller, LEDs, and a LiPo battery.
      </p>
      <p>
        I integrated a custom GUI and a machine learning model to detect animal figurines during autonomous traversal.
        This project provided hands-on experience with gears, serial communication, control systems,
        and practical robotics design.
      </p>
      <div class="project-images-container">
          <div class="project-image">
              <img src="Media/Portfolio/tracked-robot/TrackedRobot1.png" alt="Tracked Robot Image 1">
          </div>
          <div class="project-image">
              <img src="Media/Portfolio/tracked-robot/TrackedRobot2.jpeg" alt="Tracked Robot Image 2">
          </div>
          <div class="project-image">
              <img src="Media/Portfolio/tracked-robot/TrackedRobot3.jpeg" alt="Tracked Robot Image 3">
          </div>
          <div class="project-image-1">
              <img src="Media/Portfolio/tracked-robot/TrackedRobot4.png" alt="Tracked Robot Image 4">
          </div>
      </div>

      <style>
      .project-images-container {
          display: flex;
          justify-content: center;
          gap: 0.5rem; /* space between images */
          flex-wrap: wrap; /* wrap to next line on smaller screens */
          margin-top: 1rem;
      }

      .project-image img {
          max-width: 100%;
          max-height: 500px;
          border-radius: 8px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.35);
          object-fit: contain;
          flex: 1 1 45%; /* take about 45% of container, shrink if needed */
      }

      .project-image-1 img {
          max-width: 773px;
          width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.35);
          object-fit: contain;
          flex: 1 1 45%;
      }

      @media (max-width: 400px) {
          .project-image-1 img {
              max-width: 100%;        /* override 773px */
              width: 100vw;           /* fit screen width */
              height: auto;
              flex: 1 1 100%;         /* full width in flex container */
          }
      }
      </style>
    `
  },

  // John Holland
  {
    id: "john-holland",
    discipline: "Robotics",
    title: "John Holland - Undergraduate Engineer",
    dates: "Feb 2025 - Aug 2025",
    shortDescription: "Undergraduate Engineer supporting major rail infrastructure works.",
    skills: ["Microsoft Power Automate", "Microsoft Power Apps", "Process Automation", "Advanced Excel", "RFID Systems", "Rail Engineering", "Stakeholder Coordination", "Permit Management", "Civil Engineering", "Invoicing & Cost Tracking"],
    links: [],
    contentHtml: `
      <p>
        I supported engineers preparing permits for rail corridor access within a live operational rail environment,
        gaining first-hand exposure to the planning and coordination required to work safely on an active network.
      </p>
      <p>
        I improved existing Excel tools and introduced process automation using Power Automate and Power Apps
        to streamline permit preparation, improving clarity and reducing manual effort.
      </p>
      <p>
        I worked closely with stakeholders from John Holland, Metro, and V/Line to coordinate access requirements
        and maintain clear communication. In parallel, I led the implementation of RFID technology (3M EMS Ball Markers)
        within the Combined Services Route, programming markers with accurate asset data to support long-term infrastructure management.
      </p>
      <div class="project-image">
        <img src="Media/Portfolio/john-holland/NWPA.png" alt="NWPA Engineers on Site">
      </div>
      <style>
        .project-image {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
        }
        .project-image img {
            max-width: 100%;
            max-height: 420px;
            border-radius: 8px;
            box-shadow: 0 6px 16px rgba(0,0,0,0.35);
            object-fit: contain;
        }
      </style>
    `
  },

    // Monash Nova Rover
  {
    id: "monash-nova-rover",
    discipline: "Robotics",
    title: "Monash Nova Rover – Science Sub-Team",
    dates: "Jan 2022 – Jul 2023",
    shortDescription: "Engineered rover components for life-detection systems and supported STEM outreach.",
    skills: ["CAD", "3D Printing", "Electrical Systems"],
    links: [
      { label: "Monash Nova Rover", url: "https://www.novarover.space" }
    ],
    contentHtml: `
      <p>
        As part of the Science sub-team, I upgraded the rover’s linear actuator (rack and pinion) to improve precision,
        torque, and reduce mechanical play.
      </p>
      <p>
        I also helped to redesigned the sample-collection scoop and developed a new pump system to transport samples
        to different scientific test locations within the rover payload.
      </p>
      <p>
        Components were fabricated using a combination of 3D printing and machining.
        Alongside technical work, I supported STEM outreach by engaging with high school and first-year university students.
      </p>
      <div class="project-images-container">
          <div class="project-image">
              <img src="Media/Portfolio/monash-nova-rover/Nova Headshot.jpg" alt="Torsten Nova Rover Headshot">
          </div>
          <div class="project-image">
              <img src="Media/Portfolio/monash-nova-rover/Nova2.JPG" alt="Nova Rover Science Team">
          </div>
          <div class="project-image">
              <img src="Media/Portfolio/monash-nova-rover/Nova3.JPG" alt="Nova Rover Full Team">
          </div>
      </div>

      <style>
      .project-images-container {
          display: flex;
          justify-content: center;
          gap: 1rem; /* space between images */
          flex-wrap: wrap; /* wrap to next line on smaller screens */
          margin-top: 1rem;
      }

      .project-image img {
          max-width: 100%;
          max-height: 370px;
          border-radius: 8px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.35);
          object-fit: contain;
          flex: 1 1 45%; /* take about 45% of container, shrink if needed */
      }
      </style>
    `
  },

  // Robovoid
  {
    id: "robovoid",
    discipline: "Robotics",
    title: "Robovoid – Work Experience",
    dates: "Jan 2025",
    shortDescription: "Hands-on engineering work at a recycled-plastic manufacturing start-up.",
    skills: ["Electrical Systems", "Automation", "Prototyping", "Manufacturing"],
    links: [
      { label: "Robovoid", url: "https://robovoid.com" },
      { label: "ABC News Article", url: "https://www.abc.net.au/news/2024-12-06/sustainability-recyclable-plastic-beds/104680052" }
    ],
    contentHtml: `
      <p>
        I worked at Robovoid, an innovative start-up transforming recycled plastic into construction materials and furniture.
      </p>
      <p>
        I repaired and maintained electrical systems on injection moulding machines and robotic arms,
        while investigating opportunities to automate parts of the manufacturing process to improve efficiency and scalability.
      </p>
    `
  },

  // Intelligent Robotics
  {
    id: "intelligent-robotics-gui-ml",
    discipline: "Robotics",
    title: "Intelligent Robotics – GUI & ML Development",
    dates: "Jul 2024 – Nov 2024",
    shortDescription: "Developed an intelligent robot for fruit classification and autonomous path planning.",
    skills: ["Python", "Machine Learning", "Computer Vision", "GUI Development", "Automation"],
    links: [
      { label: "PenguinPi Robot", url: "https://github.com/qcr/PenguinPi-robot" }
    ],
    contentHtml: `
      <p>
        I developed intelligent robotics software combining machine learning, computer vision,
        and graphical user interfaces for perception, decision-making, and control.
      </p>
      <p>
        I programmed a PenguinPi robot in Python to autonomously detect fruits and traverse an arena
        using path-planning algorithms, supported by a custom GUI for visualisation and debugging.
      </p>
      <p>
        The robot first mapped ArUco markers using SLAM and detected fruits using a convolutional neural network trained with YOLO.
        It then executed a “shopping” task, navigating to fruits in a specific order using a fine-tuned A* path-planning algorithm.
      </p>
      <p>
        This project demonstrated full integration of perception, decision-making, and operator control
        in a fully autonomous robotic system.
      </p>
      <div class="project-images-container">
        <div class="project-image">
            <img src="Media/Portfolio/intelligent-robotics-gui-ml/Intelligent Robotics 1.jpeg" alt="Intelligent Robotics 1">
        </div>
        <div class="project-image">
            <img src="Media/Portfolio/intelligent-robotics-gui-ml/Intelligent Robotics 2.jpeg" alt="Intelligent Robotics 2">
        </div>
        <div class="project-image">
            <img src="Media/Portfolio/intelligent-robotics-gui-ml/Intelligent Robotics 3.jpeg" alt="Intelligent Robotics 3">
        </div>
      </div>

      <style>
      .project-images-container {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 1rem;
      }

      .project-image img {
          max-width: 100%;
          max-height: 370px;
          border-radius: 8px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.35);
          object-fit: contain;
          flex: 1 1 45%;
      }
      </style>
    `
  },

  // Machine Learning & Neural Networks
  {
    id: "ml-neural-networks",
    discipline: "Software",
    title: "Machine Learning & Neural Networks",
    dates: "Jul 2024 - Nov 2024",
    shortDescription: "Development of machine learning and neural network models for image and speech data analysis.",
    skills: [
      "Python",
      "Machine Learning",
      "Neural Networks",
      "PyTorch",
      "Data Preprocessing",
      "Computer Vision",
      "Speech Recognition"
    ],
    links: [],
    contentHtml: `
      <p>
        During the Monash University unit <strong>ECE4179</strong>, I developed a strong foundation in machine learning by
        building a range of models, from basic regression techniques to deep neural networks.
        While convolutional neural networks (CNNs) are often considered the most powerful for image and speech tasks,
        this project reinforced the insight that increased model complexity does not always translate to better performance.
      </p>

      <h4>Gradient Descent Visualisations</h4>
      <p>
        I created visualisations illustrating the optimisation process for Linear and Logistic Regression models.
        These plots show how gradient descent minimises loss over iterations, as well as a simple 2D decision boundary
        demonstrating how the model separates classes.
      </p>

      <div class="project-images-container">
        <div class="project-image">
          <img src="Media/Portfolio/ml-neural-networks/Image 1.png" alt="Gradient Descent and Decision Boundary Visualisations">
        </div>
      </div>

      <h4>Multi-Layer Perceptron (MLP) Autoencoders</h4>
      <p>
        I implemented MLP-based autoencoders to compress image data into latent representations and reconstruct it.
        The reconstructions below demonstrate the network’s ability to capture essential features and underlying patterns
        in the data.
      </p>

      <div class="project-images-container">
        <div class="project-image image-small">
          <img src="Media/Portfolio/ml-neural-networks/Image 2.png" alt="MLP Autoencoder Reconstruction 1">
        </div>
        <div class="project-image">
          <img src="Media/Portfolio/ml-neural-networks/Image 3.png" alt="MLP Autoencoder Reconstruction 2">
        </div>
      </div>

      <h4>Convolutional Neural Networks for Classification</h4>
      <p>
        I developed a CNN for street sign classification, achieving <strong>91.7% accuracy</strong>.
        The saliency map highlights image regions most influential to the model’s predictions,
        while the confusion matrix demonstrates strong performance along the diagonal.
      </p>

      <div class="project-images-container">
        <div class="project-image">
          <img src="Media/Portfolio/ml-neural-networks/Image 4.png" alt="CNN Saliency Map">
        </div>
        <div class="project-image">
          <img src="Media/Portfolio/ml-neural-networks/Image 5.png" alt="CNN Confusion Matrix">
        </div>
        <div class="project-image">
          <img src="Media/Portfolio/ml-neural-networks/Image 6.png" alt="CNN Classification Results">
        </div>
      </div>

      <h4>Kaggle Speech Recognition Challenge</h4>
      <p>
        I implemented a CNN with four convolutional blocks
        (convolution → batch normalisation → ReLU → 1D max pooling), with channel depth increasing at each layer.
        Despite extensive tuning, improvements were limited, reinforcing that more complex models are not always better.
        This approach placed <strong>42nd out of 136</strong>.
      </p>

      <div class="project-images-container">
        <div class="project-image">
          <img src="Media/Portfolio/ml-neural-networks/Image 7.png" alt="Speech Recognition CNN Results">
        </div>
      </div>

      <h4>AFL Match Outcome Prediction</h4>
      <p>
        I am currently developing a model to predict AFL match outcomes and margins using quantitative data
        (historical scores, betting odds as pseudo-probabilities) and one-hot encoded categorical features such as venue.
        Initial testing achieved approximately <strong>54% accuracy</strong>, indicating strong potential for further
        feature engineering and model refinement.
      </p>

      <div class="project-images-container">
        <div class="project-image">
          <img src="Media/Portfolio/ml-neural-networks/Image 8.png" alt="Speech Recognition CNN Results">
        </div>
      </div>

      <style>
        .project-images-container {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }

        .project-image {
          display: flex;
          justify-content: center;
        }

        .project-image img {
          max-width: 100%;
          max-height: 420px;
          border-radius: 8px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.35);
          object-fit: contain;
          flex: 1 1 45%;
        }

        /* Slightly shrink Image 2 so it fits neatly beside Image 3 */
        .image-small img {
          flex: 1 1 40%;
          max-height: 360px;
        }

      </style>
    `
  },

  // Analogue Electronics
  {
  id: "analogue-electronics-rms",
  discipline: "Robotics",
  title: "Analogue Electronics – RMS Circuit Design",
  dates: "Aug 2024 - Oct 2024",
  shortDescription: "Design and implementation of an analogue RMS circuit for AC signal processing.",
  skills: [
    "Embedded Systems",
    "Microcontrollers",
    "Signal Processing",
    "Breadboarding",
    "Electrical Systems",
    "Circuit Integration",
    "Operational Amplifiers",
    "Analogue Electronics"
  ],
  links: [],
  contentHtml: `
    <p>
      As part of the <strong>Analogue Electronics (ECE3161)</strong> unit, I worked in a team of four to
      design and build a root mean square (RMS) circuit capable of converting arbitrary AC inputs
      into their RMS value with fast stabilisation.
    </p>

    <p>
      The design utilised operational amplifiers, diodes, resistors, and decoupling capacitors,
      with dedicated sub-circuits responsible for squaring, square rooting, and averaging.
      Each stage was first prototyped and validated on breadboards before being integrated
      into the full RMS system.
    </p>

    <p>
      I took a lead role in integrating the individual modules and verifying end-to-end performance,
      ensuring accurate outputs across a range of test inputs.
      After completing my assigned tasks ahead of schedule, I assisted other team members with
      troubleshooting and refinement, improving overall circuit reliability and helping the group
      meet project deadlines.
    </p>

    <p>
      This project reinforced my understanding of operational amplifiers and their versatility
      for performing complex mathematical operations on analogue signals, while highlighting the
      importance of teamwork in complex electronics projects.
    </p>

    <div class="project-images-container">
        <div class="project-image">
          <img src="Media/Portfolio/analogue-electronics-rms/Image 1.webp" alt="Full Circuit Diagram">
        </div>
      </div>

    <h4>Circuit Highlights</h4>
    <div class="indented-list">
      <ul>
        <li>
          <strong>Full-Wave Precision Rectifier:</strong>
          Converts all input voltages to positive values, effectively generating the absolute value of the signal.
        </li>
        <li>
          <strong>Log–Antilog Squarer:</strong>
          Squares the rectified signal using logarithmic properties
          (2log(x) = log(x²)) by logging, scaling, and anti-logging the signal.
        </li>
        <li>
          <strong>Averaging and Buffering Circuit:</strong>
          Implements passive low-pass filtering followed by a unity-gain buffer to preserve signal integrity
          and maintain high input impedance.
        </li>
        <li>
          <strong>Log–Antilog Square Root:</strong>
          Computes the square root by halving the logged signal prior to anti-logging.
        </li>
        <li>
          <strong>Output Scaling and Offset:</strong>
          Potentiometer-controlled gain and offset using op-amp resistor ratios for stable downstream interfacing.
        </li>
      </ul>
    </div>
    <br>

    <h4>Circuit Diagrams:</h4>

    <h5>Full-Wave Precision Rectifier Circuit</h5>
    <div class="project-images-container">
      <div class="project-image">
        <img src="Media/Portfolio/analogue-electronics-rms/Image 2.webp" alt="Full-Wave Precision Rectifier Circuit Diagram">
      </div>
    </div>

    <h5>Log–Antilog Squarer Circuit</h5>
    <div class="project-images-container">
      <div class="project-image">
        <img src="Media/Portfolio/analogue-electronics-rms/Image 3.webp" alt="Log–Antilog Squarer Circuit Diagram">
      </div>
    </div>

    <h5>Averaging and Buffering Circuit</h5>
    <div class="project-images-container">
      <div class="project-image">
        <img src="Media/Portfolio/analogue-electronics-rms/Image 4.webp" alt="Averaging and Buffering Circuit Diagram">
      </div>
    </div>

    <h5>Log–Antilog Square Root Circuit</h5>
    <div class="project-images-container">
      <div class="project-image">
        <img src="Media/Portfolio/analogue-electronics-rms/Image 5.webp" alt="Log–Antilog Square Root Circuit Diagram">
      </div>
    </div>

    <h5>Output Scaling and Offset Circuit</h5>
    <div class="project-images-container">
      <div class="project-image">
        <img src="Media/Portfolio/analogue-electronics-rms/Image 6.webp" alt="Output Scaling and Offset Circuit Diagram">
      </div>
    </div>

    <style>
      .indented-list {
        margin-left: 0.7rem;
      }

      .indented-list ul {
        padding-left: 0.7rem;
      }

      .project-images-container {
        display: flex;
        justify-content: center;
        gap: 0.75rem;
        flex-wrap: wrap;
        margin-top: 1rem;
      }

      .project-image {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
      }

      .project-image img {
        max-width: 100%;
        max-height: 420px;
        border-radius: 8px;
        box-shadow: 0 6px 16px rgba(0,0,0,0.35);
        object-fit: contain;
        flex: 1 1 45%;
      }

    </style>
  
  `
  },

    // Rotationally Invariant Barcode Reader
  {
    id: "barcode-reader",
    discipline: "Software",
    title: "Rotationally Invariant Barcode Reader",
    dates: "Apr 2024 – Jun 2024",
    shortDescription: "Developed a barcode reader in C++ with rotation correction and checksum validation, as part of the Monash unit TRC3500.",
    skills: [
      "C++",
      "Computer Vision",
      "Image Thresholding",
      "Signal Processing",
      "Algorithm Design"
    ],
    links: [],
    contentHtml: `
      <p>
        Built a barcode reader from first principles without using existing libraries.
        The system captured images, applied adaptive thresholding, corrected rotation,
        decoded the UPC signal, and verified correctness using checksums.
        Performance testing showed detection accuracy above <strong>70%</strong> for distances below <strong>0.425 m</strong>.
      </p>
      <p><strong>Watch the demo video below to see the barcode reader in action!</strong></p>

      <div class="project-images-container">
        <div class="project-image">
          <img src="Media/Portfolio/barcode-reader/Barcode.png" alt="Barcode reader processing output">
        </div>
        <iframe width="900" height="506" src="https://www.youtube.com/embed/uTT7zlWWtts?si=AFLYaX18xymKLiIF&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <style>
        .project-images-container {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 1rem;
        }

        .project-image img {
          max-width: 100%;
          max-height: 420px;
          border-radius: 8px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.35);
          object-fit: contain;
          flex: 1 1 45%;
        }
      </style>
    `
  },

  // Blob Statistics & Image Segmentation
  {
    id: "blob-statistics",
    discipline: "Software",
    title: "Blob Statistics & Image Segmentation",
    dates: "Apr 2024 – Jun 2024",
    shortDescription: "C++ project for detecting and analysing blobs from webcam images, developed as part of the Monash unit TRC3500.",
    skills: [
      "C++",
      "Computer Vision",
      "Image Thresholding",
      "Feature Extraction",
      "Object Detection"
    ],
    links: [],
    contentHtml: `
      <p>
        Developed a program to detect blobs, compute area, centroid, and rotation angle.
        Achieved orientation accuracy within <strong>1 degree</strong> of ground truth in over <strong>80%</strong> of test cases.
        Extended the pipeline to classify electrical components using shape, colour, centroid position, and orientation.
      </p>
      <p><strong>Watch the demo video below to see the blob detection and analysis in action!</strong></p>
      <div class="project-images-container">
        <div class="project-image">
          <img src="Media/Portfolio/blob-statistics/Blob Statistics.png" alt="Blob Statistics Image showing original and decoded blobs">
        </div>
      </div>
      <iframe class="project-video" width="900" height="506" 
          src="https://www.youtube.com/embed/SfWzqyDuwic?si=Na5l3YRTG8tdkC2L&autoplay=1&mute=1" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
      </iframe>
      <style>
        .project-images-container {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 1rem;
        }

        .project-image img {
          max-width: 100%;
          max-height: 420px;
          border-radius: 8px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.35);
          object-fit: contain;
          flex: 1 1 45%;
        }

        .project-video {
          width: 100%;
          max-width: 900px;
          margin: 1.5rem auto;
          display: block;
          border-radius: 10px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.35);
        }
      </style>
    `
  },

  // Ultrasonic Distance Sensor (Simulink & UART)
  {
    id: "ultrasonic-sensor",
    discipline: "Robotics",
    title: "Ultrasonic Distance Sensor System",
    dates: "Apr 2024 – Jun 2024",
    shortDescription: "Embedded sensing project using MATLAB Simulink and UART, as part of the Monash unit TRC3500.",
    skills: [
      "MATLAB",
      "Simulink",
      "Embedded Systems",
      "Sensors",
      "UART",
      "Control Systems"
    ],
    links: [],
    contentHtml: `
      <p>
        Built an embedded system to measure distance using an ultrasonic sensor and transmit data via UART.
        Displayed processed output on a 7-segment display, achieving accuracy of <strong>±3 mm</strong> over 3–30 cm.
        Required careful handling of UART timing, hardware priorities, interrupts, and real-time constraints.
      </p>
      <p><strong>Watch the demo video below to see the ultrasonic distance sensor in action!</strong></p>

      <iframe width="900" height="506" class="project-video"
          src="https://www.youtube.com/embed/0F8KSmo4qS4?si=k5moYrDdsCUialel&autoplay=1&mute=1" 
          title="YouTube video player" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
      </iframe>

    <style>
      .project-images-container {
        display: flex;
        justify-content: center;
        gap: 0.75rem;
        flex-wrap: wrap;
        margin-top: 1rem;
      }

      .project-image img {
        max-width: 100%;
        max-height: 420px;
        border-radius: 8px;
        box-shadow: 0 6px 16px rgba(0,0,0,0.35);
        object-fit: contain;
        flex: 1 1 45%;
      }

      .project-video {
        width: 100%;
        max-width: 900px;
        margin: 1.5rem auto;
        display: block;
        border-radius: 10px;
        box-shadow: 0 6px 16px rgba(0,0,0,0.35);
      }
    </style>
    `
  },

    // Automated Chemical Etching System Prototype
  {
    id: "chemical-etching-system",
    discipline: "Robotics",
    title: "Automated Chemical Etching System Prototype",
    dates: "Jul 2023 - Oct 2023",
    shortDescription: "Emulating a chemical etching system with mechanical design, sensors, and real-time Simulink control.",
    skills: ["PLC Programming", "Automation", "Simulink", "MATLAB", "CAD", "FEA", "Sensors"],
    links: [],
    contentHtml: `
      <p>
        As part of the Monash unit TRC3000, I developed a prototype emulating an industrial chemical etching system.
        The project combined mechanical design, sensor integration, and real-time control using Simulink to simulate a fully automated process.
      </p>

      <h4 class="project-subheading">Gripper Design</h4>
      
      <p>
        I worked on the design and fabrication of a lightweight, strong gripper mounted on an Ender 3 Pro 3D printer. 
        The gripper was tasked with picking up thin metal sheets (as small as 1mm) of varying sizes and orientations. 
        We implemented a rack-and-pinion mechanism, leveraging the printer’s existing gear and motor control via its onboard electronics. 
        SolidWorks FEA informed improvements to high-stress areas, including the rack teeth and scoop arm. 
        The gripper was fully symmetrical, enabling efficient assembly and versatile operation.
      </p>
      <p><strong>Watch the video below to see the gripper in action!</strong></p>

      <div class="project-images-container">
          <div class="project-image">
              <img src="Media/Portfolio/chemical-etching-system/GripperPhoto1.png" alt="Gripper Photo 1">
          </div>
          <div class="project-image">
              <img src="Media/Portfolio/chemical-etching-system/GripperPhoto2.png" alt="Gripper Photo 2">
          </div>
          <iframe class="project-video" width="900" height="506" 
              src="https://www.youtube.com/embed/t-VBew_xZUY?si=OcCG2nJSWR7WhrRa&autoplay=1&mute=1" 
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
      </div>

      <h4 class="project-subheading">Simulink Integration</h4>
      <div class="indented-list">
        <ul>
          <li> 
            <strong>Rotating platform:</strong> Servo-actuated for precise angular positioning and continuous reciprocating motion.
          </li>
          <li>
            <strong>Temperature monitoring:</strong> DS18B20 thermistor measured etchant temperature in real time.
          </li>
          <li>
            <strong>Collision detection:</strong> IMU measured platform acceleration to calculate force and impulse, highlighting challenges of real-time collision detection due to sensor noise.
          </li>
          <li>
            <strong>Load cell sensing:</strong> Load cell measured the mass of etchant in the cup to infer fill level.
          </li>
          <li>
            <strong>Ultrasonic mister:</strong> Simulated etching via relay-controlled activation.
          </li>
          <li>
            <strong>Sleep mode:</strong> MOSFET and relay system allowed safe shutdown of sensors and actuators for idle or emergency conditions.
          </li>
        </ul>
      </div>

      <div class="project-images-container">
          <iframe class="project-video" width="900" height="506" 
              src="https://www.youtube.com/embed/NTc-BU_0bCk?si=EnzG6CeWextFm364&autoplay=1&mute=1" 
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
          <div class="project-image">
              <img src="Media/Portfolio/chemical-etching-system/Simulink Interface Screenshot.png" alt="Simulink interface screenshot">
          </div>
      </div>

      <h4 class="project-subheading">Project Insights</h4>
      <p>
        This project provided hands-on experience in real-time hardware-software integration, sensor noise management, and actuator coordination.
        I developed skills in system-level design, control logic prioritisation, and understanding how mechanical design choices directly impact automation performance.
        Simulink integration gave me insight into the interaction of multiple subsystems and the importance of software in orchestrating reliable automated behaviour.
      </p>

      <style>
        .indented-list {
          margin-left: 0.7rem;
        }

        .indented-list ul {
          padding-left: 0.7rem;
        }

        .project-images-container {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 1rem;
        }

        .project-image {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .project-image img {
          max-width: 100%;
          max-height: 420px;
          border-radius: 8px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.35);
          object-fit: contain;
          flex: 1 1 45%;
        }

        .project-subheading {
          font-weight: bold;
          text-decoration: underline;
          margin-top: 1.5rem;
        }

        .project-video {
          width: 100%;
          max-width: 900px;
          margin: 1rem auto;
          display: block;
          box-shadow: 0 6px 16px rgba(0,0,0,0.35);
        }
      </style>
    `
  },

  // Warman Design & Build Competition
  {
    id: "warman-design-competition",
    discipline: "Mechanical",
    title: "Warman Design & Build Competition",
    dates: "Jan 2023 – May 2023",
    shortDescription: "Developed a mechanical–electrical system for automated ball collection.",
    skills: ["Mechanical Design", "CAD", "3D Printing", "Electrical Systems", "Control Systems", "Sensors"],
    links: [
      { label: "Warman Design & Build Competition Rules 2023", url: "https://warmandesignandbuild.org.au/wp-content/uploads/2023/02/2023-Weir-Warman-Competition-Rules_v01_LR.pdf" }
    ],
    contentHtml: `
      <p>
        I contributed to the design of an automated mechanical–electrical system for collecting and placing
        tennis and squash balls within strict mass and volume constraints.
      </p>
      <p>
        I helped design strategic mobility and extended-reach mechanisms capable of navigating a 2400 × 1200 mm track
        while managing significant moment loads.
      </p>
      <p>
        The project combined creative mechanical design with practical electrical integration to achieve reliable
        performance under competition conditions.
      </p>
      <div class="project-images-container">
          <div class="project-image">
              <img src="Media/Portfolio/warman-design-competition/WARMAN1.jpg" alt="WARMAN Competition Robot">
          </div>
          <div class="project-image">
              <img src="Media/Portfolio/warman-design-competition/WARMAN2.jpg" alt="WARMAN Competition Robot">
          </div>
          <div class="project-image">
              <img src="Media/Portfolio/warman-design-competition/WARMAN3.jpeg" alt="WARMAN Competition Robot">
          </div>
      </div>

      <style>
      .project-images-container {
          display: flex;
          justify-content: center;
          gap: 1rem; /* space between images */
          flex-wrap: wrap; /* wrap to next line on smaller screens */
          margin-top: 1rem;
      }

      .project-image img {
          max-width: 100%;
          max-height: 370px;
          border-radius: 8px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.35);
          object-fit: contain;
          flex: 1 1 45%; /* take about 45% of container, shrink if needed */
      }
      </style>
    `
  },

  // ECE2072 FPGA Project
  {
    id: "ece2072-fpga",
    discipline: "Robotics",
    title: "ECE2072 – FPGA Project",
    dates: "Aug 2022 - Oct 2022",
    shortDescription: "FPGA-based digital design project implementing a cognition timer.",
    skills: ["FPGA Design", "Verilog", "Digital Logic", "Finite State Machines (FSMs)"],
    links: [],
    contentHtml: `
      <p>
        For my ECE2072 – Digital Systems unit at Monash University, I designed and implemented a cognition timer on an FPGA. 
        The timer measures the time it takes for a user to process a simple task: adding a pair of octal digits displayed 
        on 7-segment displays and submitting the result using slide switches. The challenge was not just in measuring 
        the time, but in ensuring accurate input capture, handling errors, and providing a clear, reliable visual output.
      </p>
      <p>
        I developed a six-state finite state machine (FSM) to control the system, manage timer resets, and display errors 
        if the user submitted the wrong answer or took too long. Debouncing logic was implemented for the switches to 
        prevent false readings, and the timer displayed user reaction time in 100-millisecond increments. The reset 
        and set states were deliberately separated for clarity and maintainability.
      </p>
      <p>
        The entire design was implemented in Verilog using a high-level behavioural style, avoiding bit-level flip-flop instantiations. 
        This approach made the system easier to understand, modify, and debug. After completing the project, I analysed the FPGA 
        resource usage and found that the design used 303 flip-flops. This is a moderate number that reflects the balance between implementing rich functionality and the associated logic and computational requirements.
      </p>
      <p>
        The project reinforced my understanding of digital logic, FSM design, real-time embedded systems, and FPGA synthesis and constraints. 
        It also gave me hands-on experience in converting theoretical design principles into a working, interactive hardware system.
      </p>

      <p><strong>Watch the demo video below to see the FPGA cognition timer in action!</strong></p>

      <iframe class="project-video" width="900" height="506" 
        src="https://www.youtube.com/embed/Ze-0FLiwKd0?si=DuiBtfwKIH1-_lQP&autoplay=1&mute=1" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
      </iframe>
      <style>
        .project-images-container {
            display: flex;
            justify-content: center;
            gap: 0.75rem;
            flex-wrap: wrap;
            margin-top: 1rem;
        }

        .project-image img {
            max-width: 100%;
            max-height: 420px;
            border-radius: 8px;
            box-shadow: 0 6px 16px rgba(0,0,0,0.35);
            object-fit: contain;
            flex: 1 1 45%;
        }

        .project-video {
            width: 100%;
            max-width: 900px;
            margin: 1.5rem auto;
            display: block;
            border-radius: 10px;
            box-shadow: 0 6px 16px rgba(0,0,0,0.35);
        }
      </style>
    `
  },
  
  // ECE2071 Project
  {
    id: "ece2071",
    discipline: "Software",
    title: "ECE2071 – Computer Organisation & Programming",
    dates: "Mar 2022 - Jun 2022",
    shortDescription: "Digital systems project exploring software execution from MIPS assembly to C.",
    skills: ["C Programming", "Algorithm Design", "Data Structures"],
    links: [],
    contentHtml: `
      <p>
        This project was completed as part of the Monash University unit <strong>ECE2071 – Computer Organisation & Programming</strong>,
        which focused on understanding computers from the ground up — starting with assembly language and binary representations
        and progressing to structured programming in C. The unit emphasised how high-level languages map to low-level execution,
        with a strong focus on memory access, pointer arithmetic, and algorithm efficiency.
      </p>

      <p>
        As part of the course, I wrote MIPS assembly programs to manipulate memory and explored how high-level operations
        translate into load/store and arithmetic instructions. These exercises reinforced my understanding of registers,
        addressing, and memory-mapped data, building a solid foundation in low-level programming.
      </p>

      <h4 class="project-subheading">Assignment 1 — Palindrome Detection in the Digits of π</h4>
      <p>
        I built a C program to analyse 50 million digits of π, searching for numeric palindromes of different lengths.
        The program dynamically allocated and resized strings in real time as the digits streamed from file, allowing
        efficient processing of such a large dataset. I also tracked statistics for each palindrome length, including
        frequency and average spacing, and produced a clear, formatted summary of palindrome lengths, counts, and mean distances.
      </p>

      <div class="project-images-container">
        <div class="project-image">
          <img src="Media/Portfolio/ece2071/Assignment 1 Output.png" alt="Sample output of palindrome analysis">
        </div>
        <div class="project-image">
          <img src="Media/Portfolio/ece2071/Assignment 1 Code.png" alt="C code snippet for palindrome detection">
        </div>
      </div>

      <h4 class="project-subheading">Assignment 2 — Maze Shortest Path Solver</h4>
      <p>
        I developed a shortest-path solver for arbitrary square mazes using breadth-first search (BFS),
        an algorithm that explores all possible moves level by level to guarantee finding the shortest path.
        Maze layouts were read from text files and stored in dynamically allocated memory structures. 
        I implemented custom data structures with linked lists to manage traversal and created a parallel integer grid 
        to track distances while avoiding character overflow issues. After completing the BFS, the program backtracked 
        from the target node to reconstruct and output the optimal path through the maze.
      </p>

      <div class="project-images-container">
        <div class="project-image">
          <img src="Media/Portfolio/ece2071/Assignment 2 Output.png" alt="Maze input and pathfinding visualisation (start 4,8, end 80,77)">
        </div>
        <div class="project-image">
          <img src="Media/Portfolio/ece2071/Assignment 2 Code.png" alt="C code for BFS maze solver">
        </div>
      </div>

      <style>
        .project-images-container {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }

        .project-image {
          display: flex;
          justify-content: center;
        }

        .project-image img {
          max-width: 100%;
          max-height: 420px;
          border-radius: 8px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.35);
          object-fit: contain;
          flex: 1 1 45%;
        }

        .project-subheading {
          font-weight: bold;
          text-decoration: underline;
          margin-top: 1.5rem;
        }
      </style>
    `
  },

  // Bunnings Warehouse
  {
    id: "bunnings",
    discipline: "Other",
    title: "Bunnings Warehouse – Team Member",
    dates: "Aug 2021 – Jul 2025",
    shortDescription: "Provided specialised support to tradespeople on electrical, plumbing, maintenance, and building products.",
    skills: ["Customer Service", "Electrical Systems"],
    links: [],
    contentHtml: `
      <p>
        I provided assistance to tradespeople—including electricians, plumbers, and builders—
        offering practical advice and professional customer support.
      </p>
      <p>
        Through this role, I developed extensive knowledge of electrical and engineering components
        and gained exposure to a wide range of real-world trade projects.
      </p>
    `
  },

  // Lismore City Council
  {
    id: "lismore-internship",
    discipline: "Other",
    title: "Lismore City Council – Civil Engineering Internship",
    dates: "2018",
    shortDescription: "Street signage and traffic mitigation design.",
    skills: ["CAD", "Civil Engineering"],
    links: [],
    contentHtml: `
      <p>
        During Year 10, I completed a one-week internship with Lismore City Council’s Civil Engineering Department.
      </p>
      <p>
        I gained hands-on experience in street signage and traffic mitigation design through site visits,
        CAD drafting, and contributing to infrastructure planning with lead engineers.
      </p>
    `
  }
];