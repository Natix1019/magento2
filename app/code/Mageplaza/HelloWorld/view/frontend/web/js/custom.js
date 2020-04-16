define(['uiComponent', 'ko', 'jquery', 'moment'], function(Component, ko, $, moment) {
    'use strict';

    return Component.extend({
        nameValue: ko.observable(null),
        defaults : {
                carts : [
                    {
                        name:'25% Promotion Cart',
                        code : 'PRO-82K-I34',
                        dataStart: new Date(2020,1,5),
                        dataFinish: new Date(2020,6,25),
                        status : 'available',
                        id : '1'
                    },
                    {
                        name:'45% Promotion Cart',
                        code : 'P25-GF3-24R',
                        dataStart: new Date(2029,8,1),
                        dataFinish: new Date(2020,2,1),
                        status: 'used',
                        id : '2'
                    },
                    {
                        name:'80% Promotion Cart',
                        code : 'KJ9-8SK-W4G',
                        dataStart: new Date(2020,1,5),
                        dataFinish: new Date(2020,2,21),
                        status : 'available',
                        id : '3'
                    },
                    {
                        name:'12% Promotion Cart',
                        code : 'O5F-82E-WW3',
                        dataStart: new Date(2018,4,14),
                        dataFinish: new Date(2019,6,8),
                        status : 'used',
                        id : '4'
                    },
                    {
                        name:'5% Promotion Cart',
                        code : '25J-F2K-G6G',
                        dataStart: new Date(2019,12,23),
                        dataFinish: new Date(2021,2,25),
                        status : 'used',
                        id : '5'
                    },
                    {
                        name:'50% Promotion Cart',
                        code : '68F-22K-5G5',
                        dataStart: new Date(2019,12,23),
                        dataFinish: new Date(2021,11,12),
                        status : 'available',
                        id : '6'
                    },
                    {
                        name:'75% Promotion Cart',
                        code : 'FF2-K2K-GT5',
                        dataStart: new Date(2020,1,23),
                        dataFinish: new Date(2023,2,28),
                        status : 'available',
                        id : '7'
                    },
                    {
                        name:'95% Promotion Cart',
                        code : 'P4O-12K-I12',
                        dataStart: new Date(2020,1,5),
                        dataFinish: new Date(2020,2,25),
                        status : 'available',
                        id : '8'
                    },
                    {
                        name:'80% Promotion Cart',
                        code : 'BRO-8GK-T40',
                        dataStart: new Date(2019,8,5),
                        dataFinish: new Date(2020,10,25),
                        status : 'available',
                        id : '9'
                    }
                ],
            users: [
                {
                    name:'John',
                    codes: [
                        'PRO-82K-I34',
                        'P25-GF3-24R'
                    ]
                },
                {
                    name:'Victor',
                    codes : [
                        'P25-GF3-24R',
                        'BRO-8GK-T40'
                        ]
                },
                {
                    name:'Harry',
                    codes : [
                        'KJ9-8SK-W4G'
                        ]
                },
                {
                    name:'Amelia',
                    codes : [
                        'O5F-82E-WW3'
                        ]
                },
                {
                    name:'Oscar',
                    codes : [
                        '25J-F2K-G6G',
                        'P25-GF3-24R'
                        ]
                },
                {
                    name:'Lily',
                    codes : [
                        '68F-22K-5G5'
                        ]
                },
                {
                    name:'James',
                    codes : [
                        'FF2-K2K-GT5',
                        'P4O-12K-I12'
                        ]
                }
            ]
        },
        initObservable: function () {
            this._super().observe(['carts']);

            return this;
        },
        validUser(event,data){
            let idCart=event.target.id;
            let id = document.querySelector('#'+idCart);

            console.log(moment('2020/09/01').format('YYYY-MM-DD'));

            let nameUser = $('#'+idCart+'.textUser').val();
            console.log(nameUser);
            this.users.forEach(user =>{
                if (user.name===nameUser) {
                // let thisData = new Date();
                    this.carts.filter(cart=>{
                        user.codes.filter(code =>{
                            if(code === cart.code){
                                let korectId = 'id'+cart.id;
                                if(korectId == idCart){
                                    console.log(cart.code+' '+cart.id);
                                    this.transformCart(idCart);
                                }
                        }
                    })
                })
                // if(thisData<user.dataFinish){
                //     for (let i=0;i<=180;i++){
                //         // $('.cart-block').css('transition-duration','.40s');
                //         // $('.cart-block').css('transition-delay','.5s');
                //         $('.cart-block').css('transform','rotateY('+ i +'deg)');
                //
                //     }
                // }else {
                //     $('.bottomCart').css('background','red');
                //     $('.checkUser').css('display','none');
                //     $('.namesCarts').css('font-size','15px');
                //     $('.namesCarts').css('border-bottom','none');
                //     $('.namesCarts').html(user.name +
                //         '</br>'
                //         + 'end date of the promotion' + ' '
                //         + user.dataFinish.getFullYear() + '.'
                //         + user.dataFinish.getMonth() + '.'
                //         + user.dataFinish.getDate());
                //
                // }
            }
            })
        } ,
        transformCart: function(idCart){
            let id = document.querySelector('#'+idCart);
            console.log(id);
            let promise = new Promise((resolve)=>{});
            // promise.then(result =>{for (let i=0;i<=90;i++){
            //     $('#'+idCart+'.front').css('transition-duration','4.5s');
            //     $('#'+idCart+'.front').css('transform','rotateY('+ i +'deg)');
            //
            // }});

                for (let i=0;i<=90;i++){
                        $('#'+idCart+'.front').css('transition-duration','1.5s');
                        $('#'+idCart+'.front').css('transform','rotateY('+ i +'deg)');

                    }

    setTimeout(function () {
            $('#'+idCart+'.front').css('display','none');
            $('#'+idCart+'+.back').css('display','block');
        setTimeout(function () {
            for (let i = 90; i >= 0; i--) {
                $('#' + idCart + '+.back').css('transition-duration', '4.5s');
                $('#' + idCart + '+.back').css('transform', 'rotateY(' + i + 'deg)');

            }
        },1000);
            },1500);
        },
        backCart : function (event) {
            let idCart=event.target.id;
            for (let i=0;i<=90;i++){
                $('#'+idCart+'.back').css('transition-duration','1.5s');
                $('#'+idCart+'.back').css('transform','rotateY('+ i +'deg)');

            }

            setTimeout(function () {
                $('#'+idCart+'.back').css('display','none');
                this.nextOb(idCart);

            },1500);
        },
        nextOb:function (event) {
            $('#'+event+'.front').css('display','block');
            console.log('asf')
            setTimeout(function () {
                for (let i = 90; i >= 0; i--) {
                    $('#' + event + '+.front').css('transition-duration', '4.5s');
                    $('#' + event + '+.front').css('transform', 'rotateY(' + i + 'deg)');

                }
            },1000);
        },




    });
});
