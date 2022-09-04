import createBusinessService from '../services/business/createBusiness.service';
import listBusinessService from '../services/business/listBusiness.service';

class BusinessController {
    
    constructor(){}

    async createBusiness(req, res) {
        const { cnpj, company, bank_stock } = req.body;
        const service = new createBusinessService();
        const business = await service.createBusiness(cnpj, company, bank_stock);
        res.status(business.status).json({
            message: business.message
        })

    }

    async listBusiness(req, res) {
        const { id } = req.query;
        const service = new listBusinessService();
        const business = await service.listBusiness(id);
        res.status(business.status).json({
            message: business.message
        })
    }
}

export default new BusinessController;