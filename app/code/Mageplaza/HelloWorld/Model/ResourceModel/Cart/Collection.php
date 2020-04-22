<?php
namespace Mageplaza\HelloWorld\Model\ResourceModel\Cart;
use Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection;
use Mageplaza\HelloWorld\Model\Cart as ModelTask;
use Mageplaza\HelloWorld\Model\ResourceModel\Cart as ResourceTask;

class Collection extends AbstractCollection{
    protected function _construct()
    {
        $this->_init(ModelTask::class, ResourceTask::class);
    }
}
