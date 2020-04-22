define(['uiComponent', 'ko', 'jquery', 'moment'], function(Component, ko, $, moment) {
    'use strict';

    return Component.extend({
        nameValue: ko.observable(null),
        carts: ko.observableArray([
            {
                name:'25% Promotion Cart',
                code : 'PRO-82K-I34',
                dataStart:moment('2020/01/05').format('YYYY-MM-DD'),
                dataFinish:moment('2020/06/25').format('YYYY-MM-DD'),
                status : 'available',
                id : '1'
            },
            {
                name:'45% Promotion Cart',
                code : 'P25-GF3-24R',
                dataStart:moment('2019/08/01').format('YYYY-MM-DD'),
                dataFinish:moment('2020/02/01').format('YYYY-MM-DD'),
                status: 'unavailable',
                id : '2'
            },
            {
                name:'80% Promotion Cart',
                code : 'KJ9-8SK-W4G',
                dataStart: moment('2020/01/05').format('YYYY-MM-DD'),
                dataFinish: moment('2020/02/21').format('YYYY-MM-DD'),
                status : 'available',
                id : '3'
            },
            {
                name:'12% Promotion Cart',
                code : 'O5F-82E-WW3',
                dataStart: moment('2018/04/14').format('YYYY-MM-DD'),
                dataFinish: moment('2019/06/08').format('YYYY-MM-DD'),
                status : 'unavailable',
                id : '4'
            },
            {
                name:'5% Promotion Cart',
                code : '25J-F2K-G6G',
                dataStart: moment('2019/12/23').format('YYYY-MM-DD'),
                dataFinish: moment('2021/02/25').format('YYYY-MM-DD'),
                status : 'unavailable',
                id : '5'
            },
            {
                name:'50% Promotion Cart',
                code : '68F-22K-5G5',
                dataStart: moment('2019/12/23').format('YYYY-MM-DD'),
                dataFinish: moment('2021/11/12').format('YYYY-MM-DD'),
                status : 'available',
                id : '6'
            },
            {
                name:'75% Promotion Cart',
                code : 'FF2-K2K-GT5',
                dataStart: moment('2020/01/23').format('YYYY-MM-DD'),
                dataFinish: moment('2023/02/28').format('YYYY-MM-DD'),
                status : 'used',
                id : '7'
            },
            {
                name:'95% Promotion Cart',
                code : 'P4O-12K-I12',
                dataStart: moment('2020/01/05').format('YYYY-MM-DD'),
                dataFinish: moment('2020/02/25').format('YYYY-MM-DD'),
                status : 'available',
                id : '8'
            },
            {
                name:'80% Promotion Cart',
                code : 'BRO-8GK-T40',
                dataStart: moment('2019/08/05').format('YYYY-MM-DD'),
                dataFinish: moment('2020/10/25').format('YYYY-MM-DD'),
                status : 'available',
                id : '9'
            }
        ]),
        defaults : {
                /* carts : [
                    {
                        name:'25% Promotion Cart',
                        code : 'PRO-82K-I34',
                        dataStart:moment('2020/01/05').format('YYYY-MM-DD'),
                        dataFinish:moment('2020/06/25').format('YYYY-MM-DD'),
                        status : 'available',
                        id : '1'
                    },
                    {
                        name:'45% Promotion Cart',
                        code : 'P25-GF3-24R',
                        dataStart:moment('2019/08/01').format('YYYY-MM-DD'),
                        dataFinish:moment('2020/02/01').format('YYYY-MM-DD'),
                        status: 'unavailable',
                        id : '2'
                    },
                    {
                        name:'80% Promotion Cart',
                        code : 'KJ9-8SK-W4G',
                        dataStart: moment('2020/01/05').format('YYYY-MM-DD'),
                        dataFinish: moment('2020/02/21').format('YYYY-MM-DD'),
                        status : 'available',
                        id : '3'
                    },
                    {
                        name:'12% Promotion Cart',
                        code : 'O5F-82E-WW3',
                        dataStart: moment('2018/04/14').format('YYYY-MM-DD'),
                        dataFinish: moment('2019/06/08').format('YYYY-MM-DD'),
                        status : 'unavailable',
                        id : '4'
                    },
                    {
                        name:'5% Promotion Cart',
                        code : '25J-F2K-G6G',
                        dataStart: moment('2019/12/23').format('YYYY-MM-DD'),
                        dataFinish: moment('2021/02/25').format('YYYY-MM-DD'),
                        status : 'unavailable',
                        id : '5'
                    },
                    {
                        name:'50% Promotion Cart',
                        code : '68F-22K-5G5',
                        dataStart: moment('2019/12/23').format('YYYY-MM-DD'),
                        dataFinish: moment('2021/11/12').format('YYYY-MM-DD'),
                        status : 'available',
                        id : '6'
                    },
                    {
                        name:'75% Promotion Cart',
                        code : 'FF2-K2K-GT5',
                        dataStart: moment('2020/01/23').format('YYYY-MM-DD'),
                        dataFinish: moment('2023/02/28').format('YYYY-MM-DD'),
                        status : 'used',
                        id : '7'
                    },
                    {
                        name:'95% Promotion Cart',
                        code : 'P4O-12K-I12',
                        dataStart: moment('2020/01/05').format('YYYY-MM-DD'),
                        dataFinish: moment('2020/02/25').format('YYYY-MM-DD'),
                        status : 'available',
                        id : '8'
                    },
                    {
                        name:'80% Promotion Cart',
                        code : 'BRO-8GK-T40',
                        dataStart: moment('2019/08/05').format('YYYY-MM-DD'),
                        dataFinish: moment('2020/10/25').format('YYYY-MM-DD'),
                        status : 'available',
                        id : '9'
                    }
                ], */
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
            this.carts.filter(cart=>{
                let dateNaw = new Date();
                if(dateNaw<=new Date(cart.dataFinish)){
                    if (cart.status === 'used'){
                        $('#id'+cart.id+'.front').css('display','none');
                        $('#id'+cart.id+'.front-used').css('display','block');
                        $('#id'+cart.id+'.front-used').css('transform','rotateY(0)');
                    }else {
                        cart.status = 'available'
                    }
                }else {

                    $('#id'+cart.id+'.front').css('display','none');
                    $('#id'+cart.id+'.front-unavailable').css('display','block');
                    cart.status='unavailable';
                }
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
                // let thisData = new Date();
                    this.carts().filter(cart=>{
                        user.codes.filter(code =>{
                            if(code === cart.code){
                                let korectId = 'id'+cart.id;
                                if(korectId == idCart){
                                    ko.options.deferUpdates = true;
                                    cart.status='used';
                                    console.log(this.carts());
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
            setTimeout(function () {
                    $('#'+idCart+'.front').css('display','none');
                    $('#'+idCart+'+.back').css('display','block');
                setTimeout(function () {
                    for (let i = 90; i >= 0; i--) {
                        $('#' + idCart + '+.back').css('transition-duration', '4.5s');
                        $('#' + idCart + '+.back').css('transform', 'rotateY(' + i + 'deg)');

                    }
                },100);
            },1100);
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
                $('#'+idCart+'.back').css('display','none');
                $('#'+idCart+'.front-used').css('display','block');
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
