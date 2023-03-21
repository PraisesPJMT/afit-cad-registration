export const initialValues = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  cadExperience: '',
  camExperience: '',
  pc_os: '',
  expectations: '',
};

export const ExperienceOptions = [
  { value: 'None', label: 'None' },
  { value: 'Beginner', label: '1 - 3 years' },
  { value: 'Intermediate', label: '4 - 6 years' },
  { value: 'Expert', label: '7 or more years' },
];

export const OSOptions = [
    { value: 'Windows 11', label: 'Windows 11' },
    { value: 'Windows 10', label: 'Windows 10' },
    { value: 'Windows 8', label: 'Windows 8' },
    { value: 'Other Windows', label: 'Other Windows' },
    { value: 'macOS', label: 'macOS' },
    { value: 'Linux', label: 'Linux' },
    { value: 'Others', label: 'Others' },
  ];
