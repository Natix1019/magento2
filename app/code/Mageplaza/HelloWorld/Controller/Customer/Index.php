<?php
namespace Mageplaza\HelloWorld\Controller\Customer;
class Index extends \Magento\Framework\App\Action\Action {
    public function execute() {
        $this->_view->loadLayout();
        $this->_view->renderLayout();
//        return $this->resultFactory->create(ResultFactory::TYPE_PAGE);
    }
}
?>
