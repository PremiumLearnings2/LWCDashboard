public with sharing class GetAllContacts {
         @AuraEnabled(cacheable=true)
        public static List<RecentlyViewed> GetAllContacts() {
         return [SELECT Id, FirstName, LastName, Title, Phone, Email FROM RecentlyViewed WHERE Type='Contact' LIMIT 10];
    }
    
}
