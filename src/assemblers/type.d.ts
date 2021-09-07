interface carddata {
  fundId: string;
  image: string;
  location: string;
  date: string;
  title: string;
  profile: string;
  name: string;
  available: Number;
  goal: Number;
  percentage: number;
}

interface contentdata {
  overview: string[];
  updates: string[];
  comments: comments[];
  fundId: string;
  title: string;
}

interface userdata {
  profile: string;
  name: string;
  amount: number;
}

interface objdata {
  fundId: string;
  image: string;
  title: string;
  profile: string;
  name: string;
  location: string;
  date: string;
  content: contentdata;
  topSupporters: userdata[];
  available: Number;
  goal: Number;
  percentage: number;
  supporters: number;
  shares: number;
  raisedByShares: number;
  overview: string[];
  updates: string[];
  comments: comments[];
}

interface banner {
  title: string;
  banner: string;
  user: string;
  location: string;
  date: string;
  profile: string;
}

interface comments {
  profile: string;
  name: string;
  comment: string;
  time: number;
}

interface countid {
  id: string;
}

interface sharedata {
  supporters: number;
  shares: number;
  raisedByShares: number;
}

interface dataprops {
  data: string[];
}
