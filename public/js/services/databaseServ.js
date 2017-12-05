angular.module('servicios.database',[])
	.factory('Colaborador',Colaborador).factory('Proyecto',Proyecto);

	function Colaborador($http){
		var lista = {
			colaboradores : []
		};

		var lista2 = {
			todoscolaboradores : []
		};

		lista.getColaboradores = function(){
			return $http.get('/colaboradores/')
							.then(function(res){
								console.log(res.data);
								angular.copy(res.data,lista.colaboradores,lista2.todoscolaboradores);
							},function(res){
								console.log("Error: "+res.statusText);
							});
		};
	
		lista.addColaborador = function(nuevo){
			return $http.post('/colaboradores/',nuevo)
							.then(function(res){
								lista.colaboradores.push(res.data);
							},function(res){
								console.log("Error: "+res.statusText);
							});
		};

		lista.getColaboradorById = function(id){
			return $http.get('/colaboradores/'+id)
							.then(function(res){
								angular.copy(res.data,lista.colaboradores);
							},function(res){
								console.log("Error: "+res.statusText);
							});
		};

		lista.deleteColaborador = function(id){
			return $http.delete('/colaboradores/'+id)
							.then(function(res){
								lista.colaboradores.push(res.data);
							},function(res){
								console.log("Error: "+res.statusText);
							});
		};

		lista.updateColaborador = function(colaborador){				
			return $http.put('/colaboradores/'+colaborador._id,colaborador)
							.then(function(res){
								lista.colaboradores.push(res.data);
							},function(res){
								console.log("Error: "+res.statusText);
							});
		};

		return lista;	
	};

		function Proyecto($http){
		var lista = {
			proyectos : []
		};

		lista.getProyectos = function(){
			return $http.get('/proyectos/')
							.then(function(res){
								console.log(res.data);
								angular.copy(res.data,lista.proyectos);
							},function(res){
								console.log("Error: "+res.statusText);
							});
		};
	
		lista.addProyecto = function(nuevo){
			return $http.post('/proyectos/',nuevo)
							.then(function(res){
								lista.proyectos.push(res.data);
							},function(res){
								console.log("Error: "+res.statusText);
							});
		};

		lista.getProyectoById = function(id){
			return $http.get('/proyectos/'+id)
							.then(function(res){
								angular.copy(res.data,lista.proyectos);
							},function(res){
								console.log("Error: "+res.statusText);
							});
		};


		lista.deleteProyecto = function(id){
			return $http.delete('/proyectos/'+id)
							.then(function(res){
								lista.proyectos.push(res.data,lista.proyectos);
							},function(res){
								console.log("Error: "+res.statusText);
							});
		};

		lista.updateProyecto = function(proyecto){				
			return $http.put('/proyectos/'+proyecto._id,proyecto)
							.then(function(res){
								lista.proyectos.push(res.data);
							},function(res){
								console.log("Error: "+res.statusText);
							});
		};

		return lista;	
	};