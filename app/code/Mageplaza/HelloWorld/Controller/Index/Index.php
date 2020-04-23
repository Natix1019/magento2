<?php
namespace Mageplaza\HelloWorld\Controller\Index;

use Mageplaza\HelloWorld\Model\CartFactory;
use Mageplaza\HelloWorld\Model\ResourceModel\Cart as ResourceCart;
use Mageplaza\HelloWorld\Model\ResourceModel\Cart\CollectionFactory as CartCollectionFactory;
use Magento\Framework\Controller\Result\JsonFactory;

class Index extends \Magento\Framework\App\Action\Action
{
    protected $_pageFactory;

    /**
     * @var CartFactory
     */
    protected $cartFactory;

    /**
     * @var ResourceCart
     */
    protected $resourceCart;

    /**
     * @var CartCollectionFactory
     */
    protected $cartCollectionFactory;

    /**
     * @var JsonFactory
     */
    protected $resultJsonFactory;

    public function __construct(
        \Magento\Framework\App\Action\Context $context,
        \Magento\Framework\View\Result\PageFactory $pageFactory,
        CartFactory $cartFactory,
        ResourceCart $resourceCart,
        CartCollectionFactory $cartCollectionFactory,
        JsonFactory $resultJsonFactory
    )
    {
        $this->_pageFactory = $pageFactory;
        $this->cartFactory = $cartFactory;
        $this->resourceCart = $resourceCart;
        $this->cartCollectionFactory = $cartCollectionFactory;
        $this->resultJsonFactory = $resultJsonFactory;
        return parent::__construct($context);
    }

    public function execute()
    {
        /* $object = $this->cartFactory->create();
        $this->resourceCart->load($object, 1);
        var_dump($object->getData()); */
        $cartCollection = $this->cartCollectionFactory->create();
        $carts = $cartCollection->getData();
        $i = 0;
        foreach ($carts as $cart) {
            $dataFinish = $cart['dataFinish'];
            if ($dataFinish < date("Y-m-d")){;
               $cart['status'] = 'unavailable';
//               var_dump($cart['cart_name']);

            } else {
                if ($cart['status'] !== 'used'){
                        $cart['status'] = 'available';
//                    var_dump($cart['cart_name']);
                }
            }
            $i++;
            $carts[$i] = $cart;
        }
//        for ($i =0; $i <count($carts);$i++){
//            if ($carts[$i]===$carts[$i+1]){
//                unset($carts[$i]);
//            }
//        }
//        var_dump($carts);
//
        $resultJson = $this->resultJsonFactory->create();

        return $resultJson->setData(['carts' => $carts]);
    }
}
