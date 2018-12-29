import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'; //This is my example code.

console.log("Frank's serverless portfolio."); //Echo to the console for troubleshooting

const MyWorkExamples = [
  {
    'title': 'Technology Strategy and Leadership',
	'href': 'http://www.osn.com',
	'long_desc': 'Throughout my work I have striven to keep ahead of a rapidly changing landscape, leading many complex and extensive projects and building the teams to set up and run systems. I have presented to senior management and staff regarding the choices for technology going forward to achieve the company’s strategic goals. I have also participated on various technology panels with other MENA broadcasters.',
	'desc1': '- Cloud technologies – OSN began the journey in 2016 by setting up a workflow to copy new content to AWS as well as local archive and also to migrate legacy content. This was to allow us to expand our archive in addition to providing a basis for DR. I was instrumental in the development of a migration strategy that was successful in guiding the decisions of OSN executive management, allowing various PoCs to be undertaken in the areas of content preparation and playout.',
	'desc2': '- IT infrastructure – for many years IT and broadcast technologies have been converging but the philosophies and methodologies have not. To this end we appointed a manager for Broadcast IT with responsibility for the broadcast infrastructure planning and implementation and to manage the relationship with OSN’s corporate IT department.',
	'desc3': '- Budgets – at OSN I was responsible for capex and opex spend in broadcast technology and for prioritising this spend in the context of the rest of the business and of the lifecycle of the installed systems.',
	'desc4': '- Teams – having been responsible for the teams building and supporting such rapidly-changing technology while at OSN and Orbit, I was noted for my ability to fully involve the team members in the projects and I constantly sought their feedback to guide decisions on training and development programmes to ensure the continuing interest of all team members.',
	'image': {
	  'desc': 'Future cloud strategies',
	  'src': 'images/AWS Automation Code.png',
	  'comment': ''
	}
  },
  {
    'title': 'Broadcast Technology Director, OSN',
	'href': 'http://www.osn.com',
	'long_desc': 'At OSN I led the broadcast technology department with responsibility for all technology involved in the areas of studio, post-production, archive, playout, in addition to compression and multiplexing for DTH and transcoding and streaming for OTT. I had responsibility for the strategic planning, staffing and budgeting for this area. My department was organised into various streams, each with its own manager.',
	'desc1': '- Broadcast Engineering – this stream provided first and second line support 24/7 for all broadcast systems in addition to providing project assistance for the other  technical areas.',
	'desc2': '- Broadcast Projects – this stream was responsible for the conception, management and delivery of all projects in the broadcast technology areas, preparing the budget and project plan and managing the co-ordination with suppliers, systems integrators and internal departments.',
	'desc3': '- Cloud Technology – this stream was responsible for the set up of a cloud platform to support OSN’s technology strategy. OSN’s archive and platform security systems were fully migrated to AWS cloud and various PoCs were completed for playout and post production.',
	'desc4': '- Broadcast IT – this stream led the architecture and support of the broadcast IT systems and the relationship with OSN’s corporate IT department and systems.',
	'desc5': '- Satellite and RF – this stream managed all the technology related to the reception of signals at OSN via satellite and fibre and the relationship with Samacom, OSN’s satellite uplink provider and other providers involved in the supply of feeds to OSN.',
	'desc6': '- Content Management Systems – this stream managed the systems responsible for holding OSN’s programming metadata and schedules. This included planning for future data-driven systems.',
	'image': {
	  'desc': 'Broadcast TV Technology',
	  'src': 'images/MediaLab_rackA.jpg',
	  'comment': ''
	}
  },
  {
    'title': 'Various Projects at OSN',
	'href': 'http://www.osn.com',
	'long_desc': 'OSN was formed from the merger of two competing DTH platforms in the MENA region – Orbit and Showtime. Immediately following the merger, several technology projects were undertaken to consolidate into a single, secure platform operating from a single broadcast centre. I was instrumental both in this consolidation and in the continuous upgrades that followed , making OSN a technology leader and innovator with several firsts in technology in the region.',
	'desc1': '- HD – following the securing of OSN’s platform with an HD-capable secure silicon set-top-box in 2010, OSN had a platform for delivery of HD content to its customers. This required the upgrade of virtually all aspects of OSN’s media preparation, playout and delivery systems. Careful planning and implementation was undertaken by my department and upgrades of core infrastructure needed to be done without interruption to services.',
	'desc2': '- Closed caption subtitles – to continue offering a first class service to customers and distinguish itself from other broadcasters in the region, OSN converted all subtitling from burnt-in captions to closed captions in 2011. My department was responsible for the planning and implementation of this significant upgrade.',
	'desc3': '- Platform growth – through natural growth plus the acquisition of another platform, OSN saw continual expansion since the merger growing from around 80 SD channels in 2009 to over 50 HD and 100 SD channels today.  This large increase in capacity was facilitated by migration of the platform to MPEG-4 encoding and DVB-S2 8PSK modulation, all without interruption to service and all under the responsibility of my department. These technology advances were both firsts in region.',
	'desc4': '- OTT platform launch – in 2012 OSN launched an OTT catch-up service on browsers, handheld devices and its latest connected STB. This was followed in 2014 by the addition of live streaming on this platform. Content preparation and transcoding and associated workflows were my department’s responsibility.',
	'image': {
	  'desc': 'Broadcast Projects',
	  'src': 'images/org_chart.png',
	  'comment': ''
	}
  },
  {
    'title': 'Facility Upgrade and Rebuild',
	'href': 'http://www.osn.com',
	'long_desc': 'During my tenure at both OSN in Dubai and Orbit in Bahrain and Rome I have led several large rebuild or upgrade projects that involved aspects ranging from civil and MEP works up through technical infrastructure fit-out and the rebuild or replacement of systems and workflows and migration of services to the new platforms. All this had to be done without service outage or at least minimising to maintenance windows.',
	'desc1': '- OSN UPS rebuild – a fire destroyed the UPS room in 2011 and we had to rebuild the area, install two UPSs, re-cable large parts of the building and migrate to the new power. Much of the responsibility for planning and implementation of this project fell to me and my department.',
	'desc2': '- OSN CAR rebuild – we had outgrown our racks room and needed to expand while remaining on air. This included the complete revamp of the air-conditioning to an aisle containment model while remaining within the existing power constraints of the building. My department and I were responsible for planning the requirements and strategic implementation and we worked closely with MEP consultant and contractor to achieve the optimal solution, resulting in a much more resilient server room with greater capacity.',
	'desc3': '- OSN NOC rebuild – this was done at the same time as the CAR rebuild and for the same capacity reasons. My team and I worked closely with the broadcast operations management and we took this opportunity to amalgamate two operational departments and also create a showcase area that highlighted the importance of OSN in the Midde East broadcasting landscape.',
	'desc4': '- Studio rebuild – OSN acquired a new building that included studio floor space amd my department was responsible for moving the studio facilities to this building while upgrading aspects of the technology as required.',
	'desc5': '- Bahrain facility setup and expansion – when Orbit was planning to move from Rome I went to Bahrain to lead the project to repurpose and expand an existing facility to allow the migration of services from Orbit’s Rome facility. This involved building and MEP works in addition to a large project to enhance the existing facility with a tapeless playout platform.',
	'image': {
	  'desc': 'Broadcast TV Control Room',
	  'src': 'images/tv-control-room.jpg',
	  'comment': ''
	}
  }

];


ReactDOM.render(<ExampleWork Work = {MyWorkExamples} />, document.getElementById('example-work'));
// This renders the example code into the section referred to by 'example-work' in index.html
