function directiveController() {
}


export default  () => ({
    restrict: 'E',
    replace: true,
    template: require('./basic-info-tile.html'),
    scope: {},
    transclude: true,
    bindToController: {
        name: '@',
        subName: '@',
        icon: '@',
        description: '@'
    },
    controllerAs: 'ctrl',
    controller: directiveController
});

