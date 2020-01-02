public with sharing class AccountController {
    @AuraEnabled
    public static List<Account> AccountController() {
        List<Account> xyz = [SELECT Id, Name, Phone, Website, Industry FROM Account LIMIT 5];
        System.debug(xyz);
        return [SELECT Id, Name, Phone, Website, Industry FROM Account LIMIT 5];
    }
}
