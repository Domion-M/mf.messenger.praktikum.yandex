export type PageInfoType = {
  page: {
    title: String;
    description?: String;
    goToHome?: String;
  };
};

export type FragmentPropsType = {
  className?: string;
  infoElement: {
    fragment: {
      text?: string;
      className?: string
    },
  },
  onClick?: () => void,
  inClick?: () => void
};

export type ButtonPropsType = {
  className?: string;
  infoElement: {
    button: {
      type: string;
      className?: string;
      id?: string;
      text?: string;
    },
  },
  onClick?: (e: any) => void;
};

export type UserDataType = {
  className?: string;
  infoElement: {
    user: {
      first_name?: string
      second_name?: string
      display_name?: string
      login?: string
      phone?: string
      email?: string

    },
  },
  onClick?: (e: any) => void;
};

export type UserPasswordType = {
  className?: string;
  infoElement: {
    user: {
      oldPassword?: string
      newPassword?: string
      newPasswordToo?: string

    },
  },
  onClick?: (e: any) => void;
};

export interface EventType {
  on: (event: string, callback: () => void) => void;
  off: (event: string, callback: () => void) => void;
  emit: (event: string, ...props: any) => void;
}

export interface Props {
  eventBus?: EventType;
  props: [];
  infoElement?: object;
}

export type UserType = {

  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string

};

export type ChangeUserPasswordType = {
  oldPassword: string,
  newPassword: string
};

export type InputPropsType = {
  infoElement: {
    input: {
      type?: string;
      name?: string;
      error?: boolean;
      value?: string;
      className?: string,
      placeholder?: string
    },
  },
  onFocus?: Function,
  onBlur?: Function,
  onClick?: Function,
  onMouseEnter?: Function,
  onChange?: Function,
  onInput?: Function
};
