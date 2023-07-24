export const contact = {
	fullName: '',
	location: '',
	email: '',
	phone: '',
	linkedIn: '',
	github: ''
};

export const links = {
	linkedIn: '',
	github: ''
};

export const skills = [''];

export const experiences: Experience[] = [];

interface Experience {
	role: string;
	company: string;
	year: string;
	location: string;
	description: string;
}

export const projects: Project[] = [];

interface Project {
	title: string;
	org: string;
	year: string;
	description: string;
}

export const certs: Cert[] = [];

interface Cert {
	name: string;
	by: string;
	year: string;
}
