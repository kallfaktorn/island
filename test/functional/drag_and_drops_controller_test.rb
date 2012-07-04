require 'test_helper'

class DragAndDropsControllerTest < ActionController::TestCase
  setup do
    @drag_and_drop = drag_and_drops(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:drag_and_drops)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create drag_and_drop" do
    assert_difference('DragAndDrop.count') do
      post :create, drag_and_drop: @drag_and_drop.attributes
    end

    assert_redirected_to drag_and_drop_path(assigns(:drag_and_drop))
  end

  test "should show drag_and_drop" do
    get :show, id: @drag_and_drop
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @drag_and_drop
    assert_response :success
  end

  test "should update drag_and_drop" do
    put :update, id: @drag_and_drop, drag_and_drop: @drag_and_drop.attributes
    assert_redirected_to drag_and_drop_path(assigns(:drag_and_drop))
  end

  test "should destroy drag_and_drop" do
    assert_difference('DragAndDrop.count', -1) do
      delete :destroy, id: @drag_and_drop
    end

    assert_redirected_to drag_and_drops_path
  end
end
