new Vue ({                                                                                      // activé vue

    el:'#app',                                                                                  //element qu'on greffe  à l'id pour inité le le code

    data: {                                                                                     // tableau qui contient tt les variables qu'on veut injecter

        message: 'Hello World',
        link : 'www.google.com',                                                                //on definit le lien avec le v-bind qui definit une valeur à l'attribut href
        success : true,                                                                         // si true vert si false rien car v-if // avec v-else, affiche la vue correspondante
        persons:['Marc', 'Nathalie', 'Salomé', 'Katleen', 'Marina'],                            // créer un tableau avec les personnes qu'on va afficher en <li>

        //  style: {background: '#000'}   si on veut que ça soit de fond noir // en HTML :style="style"

    },


    methods: {                                                                                  // appele une autre propriété
        close: function(){
            // this.message= "fermé!"    // afficherai fermé dans le form et fermerai le button du coup
            this.success = false                                                                // this. fait appel à toutes les propriétés injecté au niveau de vue (data)
                                                                                                // je creer une methode close -- lorsque cette methode est appelé, elle changera la valeur de success, et mettra success à false
        },

        style: function () {                                                                   // fonction qui permet de changer la couleur que ça soit coch& ou non // HTML, :style="style()" car c'est une FONCTION
            if(this.success) {
                return {background: '#00FF00'}
            } else {
                return {background: '#FF0000'}
            }
        }
    }
})