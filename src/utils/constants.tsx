import type {IModal} from "../interfaces/IModal";

export const TOTAL_PREDICTIONS: number = 3;
export const ZIP_CODES: number[] = [10286, 10099, 10278, 10119, 10001, 10124, 10257, 10105, 10017, 10138, 10203, 10199, 10169, 10212, 10117, 10111, 10163, 10103, 10108, 10157, 10261, 10109, 10121, 10159, 10242, 10004, 10153, 10116, 10173, 10081, 10150, 10265, 10175, 10060, 10102, 10179, 10154, 10096, 10200, 10114, 10155, 10185, 10079, 10271, 10277, 10129, 10113, 10171, 10160, 10276, 10292, 10006, 10082, 10269, 10152, 10174, 10256, 10196, 10036, 10055, 10122, 10258, 10007, 10020, 10168, 10177, 10197, 10118, 10273, 10112, 10010, 10123, 10110, 10107, 10046, 10164, 10008, 10120, 10090, 10259, 10106, 10149, 10178, 10275, 10019, 10158, 10012, 10156, 10260, 10172, 10094, 10005, 10279, 10048, 10072, 10095, 10211, 10018, 10165, 10268, 10126, 10161, 10167, 10170, 10104, 10022, 10249, 10176, 10045, 10016, 10003, 10166, 10184, 10098, 10151, 10015, 10101, 10087, 10047, 10011, 10025, 10280, 10285, 10024, 10282, 10038, 10270, 10133, 10272, 10065, 10080, 10162, 10213, 10028, 10041, 10131, 10281, 10002, 10044, 10043, 10009, 10029, 10125, 10014, 10013, 10130, 10274, 10128, 10021, 10023, 10132, 10075, 10069, 11101, 11201, 11206, 11238, 11231, 11109, 11205, 11222, 11104, 11217, 11211, 11106, 11368, 11372, 11216, 11225, 11374, 11379, 11385, 11370, 11103, 11377, 11369, 11355, 11373, 11221, 11203, 11232, 11371, 11218, 11378, 11105, 11102, 11226, 11233, 11375, 11237, 11215, 11354, 11213]
export const API_URL_GOOGLE_MAPS: string = 'https://maps.googleapis.com';
export const API_KEY_GOOGLE_MAPS: string = process.env.REACT_APP_API_KEY || '';
export const MESSAGE_ZIP_VALID: IModal = {
  title: 'Address updated',
  subTitle: 'New address added to your account',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  note: 'Nisi ut aliquip ex ea commodo consequat',
  text_button: 'UNDERSTOOD'
};
export const MESSAGE_ZIP_INVALID: IModal = {
  title: 'Out of Delivery Area',
  subTitle: '"Wherever I go, there I am"',
  description: 'Sadly, this quote is not true for us. In other words, we are not operating in your area(yet), but things change everyday.',
  note: 'Sing up to our newsletter to get notified.',
  text_button: 'UNDERSTOOD'
};
