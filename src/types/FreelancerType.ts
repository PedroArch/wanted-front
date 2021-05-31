import Image from './Image';
import User from './User';

export default interface FreelancerType {
  id: number;
  about: string;
  latitude: number;
  longitude: number;
  mobile: string;
  open_on_weekends: boolean;
  opening_hours: string;
  portfolio: string;
  type: string;
  images: Image[];
  user: User;
}