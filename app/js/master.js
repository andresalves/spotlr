function MasterController($scope, Data){
    $scope.items = Data.items;  
    
    $scope.showDetail = function(index){
        var selectedItem = Data.items[index];
        Data.selectedItem = selectedItem;
        $scope.ons.navigator.pushPage('gzy_detail.html', { title : selectedItem.title });
    }
}