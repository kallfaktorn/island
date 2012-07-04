class DragAndDropsController < ApplicationController
  # GET /drag_and_drops
  # GET /drag_and_drops.json
  def index
    @drag_and_drops = DragAndDrop.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @drag_and_drops }
    end
  end

  # GET /drag_and_drops/1
  # GET /drag_and_drops/1.json
  def show
    @drag_and_drop = DragAndDrop.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @drag_and_drop }
    end
  end

  # GET /drag_and_drops/new
  # GET /drag_and_drops/new.json
  def new
    @drag_and_drop = DragAndDrop.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @drag_and_drop }
    end
  end

  # GET /drag_and_drops/1/edit
  def edit
    @drag_and_drop = DragAndDrop.find(params[:id])
  end

  # POST /drag_and_drops
  # POST /drag_and_drops.json
  def create
    @drag_and_drop = DragAndDrop.new(params[:drag_and_drop])

    respond_to do |format|
      if @drag_and_drop.save
        format.html { redirect_to @drag_and_drop, notice: 'Drag and drop was successfully created.' }
        format.json { render json: @drag_and_drop, status: :created, location: @drag_and_drop }
      else
        format.html { render action: "new" }
        format.json { render json: @drag_and_drop.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /drag_and_drops/1
  # PUT /drag_and_drops/1.json
  def update
    @drag_and_drop = DragAndDrop.find(params[:id])

    respond_to do |format|
      if @drag_and_drop.update_attributes(params[:drag_and_drop])
        format.html { redirect_to @drag_and_drop, notice: 'Drag and drop was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @drag_and_drop.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /drag_and_drops/1
  # DELETE /drag_and_drops/1.json
  def destroy
    @drag_and_drop = DragAndDrop.find(params[:id])
    @drag_and_drop.destroy

    respond_to do |format|
      format.html { redirect_to drag_and_drops_url }
      format.json { head :no_content }
    end
  end
end
