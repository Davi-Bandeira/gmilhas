
export class Account {
  id: number;
  name: string;
  cpf: string;
  password: string;
  miles: Mile[] = [];
}

export class Program {
  id: number;
  name: string;
  company: string;
  category: string; // AIRLINE and BANK
  photo: string;
  account: Account;
}

export class Mile {
  id: number;
  quantity: number;
  cost: number;
  CPM: number;
  account: Account;
}
