export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  content?: IModal;
}

export interface IModal {
  title: string,
  subTitle: string,
  description: string,
  note: string,
  text_button: string,
}


