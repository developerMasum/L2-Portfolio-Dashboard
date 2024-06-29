// import { Model } from 'mongoose';

export interface TBlog {
  title: string;
  des: string;
  image: string;
}

// export interface BlogModel extends Model<TBlog> {
//   //instance methods for checking if the user exist
//   // isUserExistsByCustomId(email: string): Promise<TBlog>;
//   //instance methods for checking if passwords are matched
//   isPasswordMatched(
//     plainTextPassword: string,
//     hashedPassword: string,
//   ): Promise<boolean>;
// }
