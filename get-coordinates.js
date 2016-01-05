Coordinates = {
    key: '',
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=',
    getFromAdress: function(address){
        var apiUrl = this.url + encodeURIComponent(address) + '&key=' + this.key;
        console.log(apiUrl);
        var res = HTTP.get(apiUrl).data;
        if(res['status']=='OK'){
            var response = {
                'status': res['status'],
                'location': res['results'][0]['geometry']['location']
            };
        }else{
            var response = {'status': res['status']};
        }
        return response
    }
}
