define(['uiComponent', 'ko', 'jquery', 'moment'], function(Component, ko, $, moment) {
    'use strict';

    return Component.extend({
        nameValue: ko.observable(null),
        carts: ko.observableArray(),
        defaults : {
            users: [
                {
                    name:'John',
                    codes: [
                        'PRO-82K-I34',
                        'P25-GF3-24R'
                    ],
                    filterName:true
                },
                {
                    name:'Victor',
                    codes : [
                        'P25-GF3-24R',
                        'BRO-8GK-T40'
                        ],
                    filterName:true
                },
                {
                    name:'Harry',
                    codes : [
                        'KJ9-8SK-W4G'
                        ],
                    filterName:true
                },
                {
                    name:'Amelia',
                    codes : [
                        'O5F-82E-WW3'
                        ],
                    filterName:true
                },
                {
                    name:'Oscar',
                    codes : [
                        '25J-F2K-G6G',
                        'P25-GF3-24R'
                        ],
                    filterName:true
                },
                {
                    name:'Lily',
                    codes : [
                        '68F-22K-5G5'
                        ],
                    filterName:true
                },
                {
                    name:'James',
                    codes : [
                        'FF2-K2K-GT5',
                        'P4O-12K-I12'
                        ],
                    filterName:true
                }
            ]

        },
        /* initObservable: function () {
            this._super().observe(['carts']);

            return this;
        }, */
        filterCart(){

            $.ajax({
                url: "/helloworld/index/index",
                dataType: "json"
            }).done((data)=>{
                $('.section_cart').css('display','block');

                console.log(data.carts);
                this.carts(data.carts);
                this.carts.filter(cart=>{
                    if (cart.status === 'used'){
                        $('#id'+cart.cart_id+'.front-used').css('transform','rotateY(0)');
                    }

                })


            }).fail(()=>{
                $('.errors').css('display','block');
            }).always(()=>{
                $('.svg_loader').css('display','none');
            });
        },

        keyUpValid: function (data, event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                this.validUser(event);
            }
        },

        validUser: function (event) {
            let idCart=event.target.id;
            let id = document.querySelector('#'+idCart);
            let i=0;

            let nameUser = $('#'+idCart+'.textUser').val();
            this.users.forEach(user =>{
                if (user.name===nameUser) {
                    this.carts().filter(cart=>{
                        user.codes.filter(code =>{
                            if(code === cart.promotion){
                                console.log(cart.cart_id);
                                let korectId = 'id'+cart.cart_id;
                                if(korectId == idCart){
                                    this.transformCart(idCart);
                                }
                        }
                    })
                })

            }else {

                    i++;
                    if (i===this.users.length){
                            $('#'+idCart+'.errorName').css('display','block');
                        setTimeout(()=>{
                             $('#'+idCart+'.errorName').css('display','none');
                        },5000);
                    }


                }
            })
        } ,
        transformCart: function(idCart){
            let id = document.querySelector('#'+idCart);
            for (let i=0;i<=90;i++){
                $('#'+idCart+'.front').css('transition-duration','1.5s');
                $('#'+idCart+'.front').css('transform','rotateY('+ i +'deg)');
            }



            setTimeout( ()=> {
                    this.statusActive(idCart);
                setTimeout( () =>{
                    for (let i = 90; i >= 0; i--) {
                        $('#'+idCart+'.back').css('transition-duration', '4.5s');
                        $('#'+idCart+'.back').css('transform', 'rotateY(' + i + 'deg)');

                    }
                },100);
            },1100);

         },
        statusActive : function(idCart){
            let carts = this.carts();
            carts.filter(cart => {
                let cart_id ='id' +cart.cart_id;
                if (idCart === cart_id){
                   return  cart.status = 'active';
                }
            });
            this.carts(carts);
        },
        statusUsed : function(idCart){
            let carts = this.carts();
            carts.filter(cart => {
                let cart_id ='id' +cart.cart_id;
                if (idCart === cart_id){
                    return  cart.status = 'used';
                }
            });
            this.carts(carts);
            $.ajax({
                url:'/helloworld/index/cartset',
                data:this.carts
            }).done(data=>{

            })
        },
        backCart : function (event) {
            let idCart=event.target.id;

            let wait = new Promise(resolve => {
                for (let i = 0; i <= 90; i++) {
                    $('#' + idCart + '.back').css('transition-duration', '1.5s');
                    $('#' + idCart + '.back').css('transform', 'rotateY(' + i + 'deg)');
                    if (i === 90) {
                        resolve(i);
                    }
                }
            });

            setTimeout(() => {
                this.statusUsed(idCart);
                setTimeout(() => {
                    for (let i = 90; i >= 0; i--) {
                        $('#'+idCart+'.front-used').css('transition-duration', '4.5s');
                        $('#'+idCart+'.front-used').css('transform', 'rotateY(' + i + 'deg)');

                    }
                },100);

            },1100);
        },








    });
});
