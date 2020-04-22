<?php
namespace Mageplaza\HelloWorld\Model\ResourceModel;
use Magento\Framework\Model\ResourceModel\DB\AbstractDb;

class Cart extends AbstractDb
{
    protected function _construct()
    {
        $this->_init('mageplaza_helloworld_cart', 'cart_id');
    }
}
