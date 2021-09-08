interface User {
  profile: any;
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  accNo: string;
  bankName: string;
  ifscCode: string;
  upiId: string;
  fundId: string;
  comment: string;
  name: string;
}

interface fund {
  fundId: string;
  image: string;
  title: string;
  location: string;
  date: string;
  goal: number;
  overview: string[];
  updates: string[];
  amount: number;
  message: string;
}

interface params {
  fundId: string;
}
