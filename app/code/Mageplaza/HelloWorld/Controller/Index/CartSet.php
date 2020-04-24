<?php
namespace Mageplaza\HelloWorld\Controller\Index;

use Mageplaza\HelloWorld\Model\CartFactory;
use Mageplaza\HelloWorld\Model\ResourceModel\Cart as ResourceCart;
use Magento\Framework\Controller\Result\JsonFactory;

class CartSet extends \Magento\Framework\App\Action\Action
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
     * @var JsonFactory
     */
    protected $resultJsonFactory;

    public function __construct(
        \Magento\Framework\App\Action\Context $context,
        \Magento\Framework\View\Result\PageFactory $pageFactory,
        CartFactory $cartFactory,
        ResourceCart $resourceCart,
        JsonFactory $resultJsonFactory
    )
    {
        $this->_pageFactory = $pageFactory;
        $this->cartFactory = $cartFactory;
        $this->resourceCart = $resourceCart;
        $this->resultJsonFactory = $resultJsonFactory;
        return parent::__construct($context);
    }

    public function execute()
    {
        $post = $this->getRequest()->getPostValue();

        $object = $this->cartFactory->create();
        $this->resourceCart->load($object, 1);
        var_dump($object->getData());

        $resultJson = $this->resultJsonFactory->create();

        return $resultJson->setData(true);
    }
}
