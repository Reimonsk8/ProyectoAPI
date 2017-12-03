angular.module('controladores.database',['servicios.database'])
	.controller('ColaboradoresCtrl',ColaboradoresCtrl).controller('ProyectosCtrl',ProyectosCtrl);



function ColaboradoresCtrl($scope,$http,Colaborador){

	$scope.colaborador = {};

	$scope.colaboradores = Colaborador.colaboradores;

	$scope.getColaboradores = function(query){
		Colaborador.getColaboradores();
		$scope.colaboradores = Colaborador.colaboradores;
	};

	$scope.deleteColaborador = function(id){
		Colaborador.deleteColaborador(id);
		Colaborador.getColaboradores();
		$scope.colaboradores = Colaborador.colaboradores;
	};

	$scope.updateColaborador = function(colaborador){
		$scope.colaborador = colaborador;
		Colaborador.updateColaborador(colaborador);
	};

	$scope.addColaborador = function(){
		Colaborador.addColaborador($scope.colaborador);
	};

	$scope.showColaborador = function(colaborador){
		$scope.colaborador = colaborador;
		Colaborador.getColaboradorById(colaborador._id);		
	};

}



function ProyectosCtrl($scope,$http,Proyecto){

	$scope.proyecto = {};

	$scope.proyectos = Proyecto.proyectos;

	$scope.getProyectos = function(){
		Proyecto.getProyectos();
		$scope.proyectos = Proyecto.proyectos;
	};

	$scope.deleteProyecto = function(id){
		Proyecto.deleteProyecto(id);
		Proyecto.getProyectos();
		$scope.proyectos = Proyecto.proyectos;
	};

	$scope.updateProyecto = function(proyecto){
		$scope.proyecto = proyecto;
		Proyecto.updateProyecto(proyecto);
	};

	$scope.addProyecto = function(){
		Proyecto.addProyecto($scope.proyecto);
	};

	$scope.showProyecto = function(proyecto){
		$scope.proyecto = proyecto;
		Proyecto.getProyectoById(proyecto._id);
	};


}

