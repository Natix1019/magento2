<?php
namespace Mageplaza\HelloWorld\Model\ResourceModel\Cart;
use Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection;
use Mageplaza\HelloWorld\Model\Cart as ModelCart;
use Mageplaza\HelloWorld\Model\ResourceModel\Cart as ResourceCart;

class Collection extends AbstractCollection{
    protected function _construct()
    {
        $this->_init(ModelCart::class, ResourceCart::class);
    }
}
