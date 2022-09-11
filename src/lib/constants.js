import logoTech9 from "@/images/logos/tech9.png";
import logoRCM from "@/images/logos/rcm.jpeg";
import logoPackt from "@/images/logos/packt.jpeg";
import logoMerkleSokrati from "@/images/logos/merkleSokrati.jpeg";
import logoCognizant from "@/images/logos/cognizant.jpeg";
import logoBits from "@/images/logos/bits.jpeg";
import logoGTU from "@/images/logos/gtu.jpeg";

export const WORK = [
	{
		company: 'Tech9',
		title: 'Software Engineer',
		logo: logoTech9,
		start: 'Aug 2016',
		end: {
			label: 'Present',
			dateTime: new Date().getFullYear(),
		},
	},
	{
		company: 'Red Canyon Media',
		title: 'Software Engineer',
		logo: logoRCM,
		start: 'Jul 2019',
		end: {
			label: 'Present',
			dateTime: new Date().getFullYear(),
		},
	},
	{
		company: 'Packt',
		title: 'Technical Reviewer',
		logo: logoPackt,
		start: 'Oct 2018',
		end: 'Jan 2019',
	},
	{
		company: 'Merkle Sokrati',
		title: 'Software Engineer | FED',
		logo: logoMerkleSokrati,
		start: 'Oct 2015',
		end: 'Aug 2016',
	},
	{
		company: 'Cognizant',
		title: 'Programmer Analyst',
		logo: logoCognizant,
		start: 'Feb 2014',
		end: 'Oct 2015',
	},
	{
		company: 'Xcellance Techno Labs Pvt. Ltd.',
		title: 'Intern',
		start: 'July 2012',
		end: 'May 2013',
	},
]


export const EDUCATION = [
	{
		company: 'Birla Institute of Technology and Science, Pilani',
		title: 'M.Tech, Data Science & Engineering',
		logo: logoBits,
		start: 'Mar 2022',
		end: {
			label: 'Present',
			dateTime: new Date().getFullYear(),
		},
	},
	{
		company: 'Gujarat Technological University, Ahmedabad',
		title: 'B.E, Computer Science & Engineering',
		logo: logoGTU,
		start: '2009',
		end: '2013',
	},
]
