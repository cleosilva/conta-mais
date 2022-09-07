import bankAccountRepository from "../../repositories/bankAccountRepository";
import generatorId from "../../../utils/generatorId";

class createBankAccountService {
  constructor() {}

  async createBankAccount(agency, account, financial_institution, cash, limit) {
    const id = generatorId();
    this.repository = new bankAccountRepository();
    try {
      this.bank = await this.repository.create(
        id,
        agency,
        account,
        financial_institution,
        cash,
        limit
      );
      return {
        status: 201,
        message: this.bank,
      };
    } catch (e) {
      console.log(e);
      return {
        status: 400,
        message: "Não foi possível cadastrar a nova conta.",
      };
    }
  }
}

export default createBankAccountService;
