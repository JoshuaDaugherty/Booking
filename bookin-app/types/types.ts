import { UserRole } from "@prisma/client";

export type ServiceProps= {
  title: string,
  image: string,
  slug: string
}

export type RegisterInputsProps={
  fullName: string;
  email: string;
  password: string;
  phone: string;
  role: UserRole;
};

export type LoginInputsProps={
  email: string;
  password: string;
}