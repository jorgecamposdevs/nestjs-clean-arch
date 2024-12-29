export type Userprops = {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
};

export class UserEntity {
  constructor(public readonly props: Userprops) {
    this.props.createdAt = this.props.createdAt ?? new Date();
  }
}
